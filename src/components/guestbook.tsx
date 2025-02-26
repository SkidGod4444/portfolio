"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Trash2, Loader2 } from "lucide-react";
import Image from "next/image";
import { Textarea } from "./ui/textarea";
import BlurFade from "./magicui/blur-fade";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { postSchema, PostSchemaT } from "@/lib/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useAuth } from "@/context/auth.context";
import { createClient } from "@/data/supabase/client";
import { deleteMsg, postMsg } from "@/data/func";
import { DATA } from "@/data/config/site.config";

const PAGE_SIZE = 5;

interface Message {
  id: number;
  user_id: string;
  user_image: string;
  user_name: string;
  user_email: string;
  msg: string;
  created_at: string;
}

export default function Guestbook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { user } = useAuth();
  const supabase = createClient();

  const form = useForm<PostSchemaT>({
    resolver: zodResolver(postSchema),
    defaultValues: { msgbox: "" },
  });

  // Memoize the set of message IDs to prevent duplicates
  const messageIds = useMemo(
    () => new Set(messages.map((msg) => msg.id)),
    [messages],
  );

  const loadMoreMessages = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false })
        .range(messages.length, messages.length + PAGE_SIZE - 1);

      if (error) {
        throw error;
      }

      const typedData = (data ?? []) as Message[];

      const newMessages = typedData.filter((msg) => !messageIds.has(msg.id));

      // Only add unique messages
      if (newMessages.length > 0) {
        setMessages((prev) => {
          const updatedMessages = [...prev, ...newMessages];
          // Ensure no duplicates by creating a Set and converting back to array
          const uniqueMessages = Array.from(
            new Map(updatedMessages.map((msg) => [msg.id, msg])).values(),
          );
          return uniqueMessages;
        });
      }

      setHasMore(newMessages.length === PAGE_SIZE);
    } catch (error) {
      console.error("Error loading messages:", error);
      toast.error("Failed to load messages. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [messages, supabase, messageIds, isLoading, hasMore]);

  useEffect(() => {
    const messageChannel = supabase
      .channel("messages-db-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "messages" },
        (payload) => {
          if (payload.new && "id" in payload.new) {
            const newMessage = payload.new as Message;
            setMessages((prev) => {
              const isDuplicate = prev.some((msg) => msg.id === newMessage.id);
              if (!isDuplicate) {
                return [newMessage, ...prev];
              }
              return prev;
            });
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(messageChannel);
    };
  }, [supabase, messageIds]);

  const fetchInitialMessages = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false })
        .range(0, PAGE_SIZE - 1);

      if (error) {
        throw error;
      }

      const typedData = (data ?? []) as Message[];
      setMessages(typedData);

      setHasMore(typedData.length === PAGE_SIZE);
    } catch (error) {
      console.error("Error loading initial messages:", error);
      toast.error("Failed to load messages. Please try again.");
    }
  }, [supabase]);

  // Initial load of messages
  useEffect(() => {
    fetchInitialMessages();
  }, [fetchInitialMessages]);

  // Infinite scroll effect
  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      loadMoreMessages();
    }
  }, [inView, hasMore, isLoading, loadMoreMessages]);

  const handleSignIn = async (type: "google" | "github") => {
    try {
      const origin =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://devwtf.in";

      await supabase.auth.signInWithOAuth({
        provider: type,
        options: { redirectTo: `${origin}/api/auth/callback` },
      });
    } catch (error) {
      console.error("Sign in error:", error);
      toast.error("Failed to sign in. Please try again.");
    }
  };

  const handleDelMsg = async (id: number) => {
    try {
      const isDel = await deleteMsg(id);

      // If deletion is successful, remove the message from the local state
      if (isDel) {
        setMessages((prevMessages) =>
          prevMessages.filter((msg) => msg.id !== id),
        );
        toast.success("Message deleted successfully");
      } else {
        toast.error("Failed to delete message");
      }
    } catch (error) {
      console.error("Error deleting message:", error);
      toast.error("Failed to delete message. Please try again.");
    }
  };

  const onSubmit = async (data: PostSchemaT) => {
    if (!user) {
      toast.error("Please sign in to send a message.");
      return;
    }

    try {
      const validatedData = await postSchema.parseAsync({ ...data });
      await postMsg(
        user.user_metadata.avatar_url!,
        user.email!,
        user.user_metadata.name!,
        validatedData.msgbox,
      );
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-2 mt-5 overflow-hidden">
      <div className="space-y-4 mb-24">
        {messages.map((msg, i) => (
          <BlurFade delay={i * 0.2} key={msg.id}>
            <div className="bg-card dark:border-white/[0.2] dark:bg-transparent backdrop-blur-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-xl p-4 w-full hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-start gap-3 w-full">
                <Image
                  src={msg.user_image}
                  alt={msg.user_name}
                  width={55}
                  height={55}
                  className="rounded-xl bg-muted"
                />
                <div className="flex-1 min-w-0 md:min-w-[450px] w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-1 w-full">
                      <span className="font-semibold truncate">
                        {msg.user_name}
                      </span>
                      <span className="text-muted-foreground text-sm truncate">
                        @{msg.user_email.slice(0, 8)}
                      </span>
                      <span className="hidden md:block text-muted-foreground text-sm">•</span>
                      <span className="hidden md:block text-muted-foreground text-sm">
                        {new Date(msg.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    {(user?.id === msg.user_id ||
                      user?.id === DATA.adminUserId) && (
                      <Button
                        size={"icon"}
                        variant={"ghost"}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => handleDelMsg(msg.id)}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    )}
                  </div>
                  <p className="text-foreground break-words text-sm w-full">
                    {msg.msg}
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
        {hasMore && (
          <div ref={ref} className="py-4 text-center">
            {isLoading ? (
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 animate-spin" />
                <p className="text-sm text-muted-foreground">
                  Loading more messages...
                </p>
              </div>
            ) : null}
          </div>
        )}
        {!hasMore && messages.length > 0 && (
          <p className="text-center text-sm text-muted-foreground py-4">
            No more messages to load
          </p>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t p-2 pb-20 md:pb-3">
        <div className="max-w-xl mx-auto">
          {user ? (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col md:flex-row gap-2 w-full"
              >
                <FormField
                  control={form.control}
                  name="msgbox"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Textarea
                          placeholder="So, what do you think about me?..."
                          className="flex-1"
                          {...field}
                          autoFocus
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="m-auto w-full md:w-auto"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send"}
                </Button>
              </form>
            </Form>
          ) : (
            <div className="flex w-full gap-2 items-center justify-center">
              <Button onClick={() => handleSignIn("google")}>
                Login with Google
              </Button>
              <span className="text-muted-foreground">OR</span>
              <Button onClick={() => handleSignIn("github")}>
                Login with GitHub
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

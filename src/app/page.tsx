"use client";
import { useState, useEffect } from "react";
import { Lens } from "@/components/acternityui/lens";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/config/site.config";
import {
  AlarmClock,
  CircleArrowOutUpRight,
  LocateFixed,
  Paperclip,
  PartyPopper,
} from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import { PlaceholdersAndVanishInput } from "@/components/acternityui/vanish-input";
import { Spotlight } from "@/components/acternityui/spotlight";
import { PROJECTS } from "@/data/config/projects.config";
import { BlogCard } from "@/components/blog-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const BLUR_FADE_DELAY = 0.04;

interface BlogsI {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    icon: string;
    featured: boolean;
    readTime: string;
  };
}
export default function Page() {
  const [blogPosts, setBlogPosts] = useState<BlogsI[]>([]);
  const [isNsl, setIsNsl] = useState(false);
  const [isInputLoading, setIsInputLoading] = useState(false);
  const [mail, setMail] = useState("");

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    const checkNewsletterSubscription = () => {
      if (typeof window !== "undefined") {
        const newsletterSubscription = localStorage.getItem("devwtf-nsl");
        if (newsletterSubscription) {
          setIsNsl(true);
        } else {
          setIsNsl(false);
        }
      }
    };

    if (!isNsl && blogPosts.length === 0) {
      checkNewsletterSubscription();
    }

    if (blogPosts.length === 0) {
      fetchBlogPosts();
    }
  }, [blogPosts.length, isNsl]);

  const [hovering, setHovering] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const placeholders = [
    "connect.saidev@gmail.com",
    "Dive deeper into the world of tech and beyond. Hit subscribe!",
    "Curious about everything? subscribe now!",
    "Write a Javascript method to reverse a string",
    "Discover the stories behind the code!",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsInputLoading(true);
    try {
      const response = await fetch("/api/nsl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: mail }),
      });

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      const data = await response.json();
      setIsInputLoading(false);
      console.log("Subscription successful:", data);
      // Show success toast
      toast.success("Subscription successful, check your inbox!");
      // Update local storage to indicate subscription
      localStorage.setItem("devwtf-nsl", data.id);
      // Update state to reflect subscription
      setIsNsl(true);
    } catch (error) {
      setIsInputLoading(false);
      console.error("Error subscribing:", error);
      // Show error toast
      toast.error("Subscription failed. Please try again.");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Spotlight
        className="fixed -top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👻`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-lg mt-2"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="flex flex-wrap gap-1 h-full w-full">
                  <Badge variant="secondary" className="cursor-pointer">
                    <LocateFixed className="size-4 mr-1" />
                    {DATA.location}
                  </Badge>
                  <Badge variant="secondary" className="cursor-pointer">
                    <AlarmClock className="size-4 mr-1" />
                    {currentTime.toLocaleTimeString(DATA.localCode, {
                      timeZone: DATA.timeZone,
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: true,
                    })}
                  </Badge>
                  <Link href={DATA.resume}>
                    <Badge
                      variant="secondary"
                      className="hidden md:flex cursor-pointer"
                    >
                      <Paperclip className="size-4 mr-1" />
                      Resume
                    </Badge>
                  </Link>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Lens hovering={hovering} setHovering={setHovering}>
                <Avatar className="size-28 border cursor-pointer">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </Lens>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="bio">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.bio}
          </Markdown>
        </BlurFade>
      </section>
      <section id="career">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Career</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.career}
          </Markdown>
        </BlurFade>
      </section>

      <section id="blogs">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Latest Articles
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My thoughts on ... everything
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I love writing about tech, programming, and life in general. I
                  hope you will click on them by mistake. Here are a few of my
                  latest articles. You can find more on my{" "}
                  <Link href="/blog" className="text-blue-500 hover:underline">
                    blog page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="flex flex-col gap-3 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="divide-y divide-dashed">
                {blogPosts
                  .filter((post) => post.metadata.featured)
                  .sort(
                    (a, b) =>
                      new Date(b.metadata.publishedAt).getTime() -
                      new Date(a.metadata.publishedAt).getTime()
                  )
                  .map((post, id) => (
                    <BlurFade
                      key={post.slug}
                      delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                    >
                      <BlogCard
                        href={`/blog/${post.slug}`}
                        title={post.metadata.title}
                        description={post.metadata.summary}
                        publishedAt={post.metadata.publishedAt}
                        iconUrl={post.metadata.icon}
                        readTime={post.metadata.readTime}
                      />
                    </BlurFade>
                  ))}
              </ul>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="projects">
      <div className="flex flex-col items-center">
      <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm mb-5">
            Featured Projects
          </div>
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
      <Tabs defaultValue="myworks" className="flex flex-col items-center justify-center w-full">
      <TabsList className="grid w-[400px] grid-cols-2 mb-4">
        <TabsTrigger value="myworks">My Works</TabsTrigger>
        <TabsTrigger value="clientworks">Client Works</TabsTrigger>
      </TabsList>
      <TabsContent value="myworks">
      <BlurFade delay={BLUR_FADE_DELAY}>
      <div className="space-y-12 w-full">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-2">
                    Some of my cool shits
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of cool shits, from simple websites
                    to mobile apps to complex IoT projects. Here are a few of my favorites.
                    You can find more on my{" "}
                    <Link
                      href="/projects"
                      className="text-blue-500 hover:underline"
                    >
                      projects page
                    </Link>
                    .
                  </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-8">
                    {PROJECTS.filter((project) => project.featured).map(
                      (project, id) => (
                        <BlurFade
                          key={project.title}
                          delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                        >
                          <ProjectCard
                  href={project.href}
                  active={project.active}
                  archived={project.archived}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
                        </BlurFade>
                      )
                    )}
                  </div>
        </div>
        </BlurFade>
        </TabsContent>
        <TabsContent value="clientworks">
        </TabsContent>
        </Tabs>
        </BlurFade>
      </div>
      </section>

      <section id="newsletter">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Newsletter
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                No Bull shit talks
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to follow my journey? Just subscribe to my newsletter
                bellow and get the latest updates. I don&apos;t spam!
              </p>
              <div className="pt-10">
              {!isNsl ? (
                <PlaceholdersAndVanishInput
                  type="email"
                  placeholders={placeholders}
                  onChange={handleChange}
                  onSubmit={onSubmit}
                  disabled={isInputLoading}
                />
              ) : (
                <Alert className="rounded-full bg-background/80 backdrop-blur-sm">
                  <AlertTitle>
                    <Badge>Heads up!</Badge>
                  </AlertTitle>
                  <AlertDescription className="text-sm underline">
                    You have already signed up for the newsletter.
                  </AlertDescription>
                </Alert>
              )}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}

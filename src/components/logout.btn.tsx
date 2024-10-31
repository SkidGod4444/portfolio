import React from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { createClient } from "@/data/supabase/client";
import { toast } from "sonner";

export default function LogOutBtn({ isLarge }: { isLarge: boolean }) {
  const handleSignOut = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
      return error;
    } else {
      toast.success("Logged out successfully!");
    }
  };

  return isLarge ? (
    <button
      onClick={handleSignOut}
      className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
    >
      <span>Logout</span>
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
    </button>
  ) : (
    <Button onClick={handleSignOut} size="icon" variant="ghost">
      <LogOut className="size-5" />
    </Button>
  );
}

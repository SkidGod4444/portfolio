"use client";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { navItems } from "@/data/config/nav.config";
import { DATA } from "@/data/config/site.config";
import { cn } from "@/lib/utils";
import { HeartPulse, Paperclip } from "lucide-react";
import Link from "next/link";
import LogOutBtn from "./logout.btn";
import { useAuth } from "@/context/auth.context";

export default function BottomNavbar() {
  const { user } = useAuth();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 border border-transparent dark:border-white/[0.2] rounded-full dark:bg-transparent bg-background backdrop-blur-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        {navItems.map((item) => (
          <DockIcon key={item.link}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.link}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12",
                  )}
                >
                  {item.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={DATA.sponsore}>
                <Button
                  variant="ghost"
                  type="button"
                  size="icon"
                  className="px-2"
                >
                  <HeartPulse />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Sponsor</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

        <DockIcon>
          <Tooltip>
          <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

        {user && (
          <Tooltip>
            <TooltipTrigger>
              <LogOutBtn isLarge={false} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Logout</p>
            </TooltipContent>
          </Tooltip>
        )}
      </Dock>
    </div>
  );
}

import Guestbook from "@/components/guestbook";
import BlurFade from "@/components/magicui/blur-fade";
import React from "react";

const BLUR_FADE_DELAY = 0.04;
export default function GuestBook() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="space-y-12 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                My Guestbook!
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                This is a place where people share their thoughts, experiences,
                and ideas about me. Feel free to drop yours!
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
      <Guestbook />
    </div>
  );
}

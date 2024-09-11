import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { TimeLineCard } from "@/components/timeline-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/config/site.config";
import { SKILLS } from "@/data/config/skills.config";
import { WORK } from "@/data/config/work.config";
import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function About() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="quote">
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
          yOffset={8}
          text={`Fyi, I'm ${DATA.name} 🧠`}
        />
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-lg text-muted-foreground mb-6">
            Welcome to my little corner of the internet. I&apos;m thrilled
            you&apos;re here!
          </p>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <Image
            src="/quote.jpeg"
            alt="quote"
            width={1920}
            height={1080}
            className="rounded-xl w-full h-auto object-cover max-h-[300px]"
          />
        </BlurFade>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.about}
          </Markdown>
        </BlurFade>
      </section>
      <section id="career">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Career</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.careerFull}
          </Markdown>
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-col gap-3">
            {SKILLS.map((skillCategory, id) => (
              <BlurFade
                key={skillCategory.category}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <p key={skillCategory.category} className="text-sm mb-1">
                  {skillCategory.category}
                </p>
                <div className="flex flex-wrap gap-1">
                  {skillCategory.technologies.map((tech, techId) => (
                    <Badge key={`${skillCategory.category}-${tech}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                location={education.location}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {WORK.map((work, id) => (
                <BlurFade
                  key={work.title + work.dates}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <TimeLineCard
                    title={work.title}
                    role={work.role}
                    description={work.description}
                    location={work.location}
                    dates={work.dates}
                    image={work.image}
                    links={work.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="connect">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Hook with me</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.connect}
          </Markdown>
        </BlurFade>
      </section>
    </main>
  );
}

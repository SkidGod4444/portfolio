import { Icons } from "@/components/icons";

export const PROJECTS = [
  {
    title: "x0-GPT - Ai powered brain",
    href: "https://x0-gpt.devwtf.in",
    dates: "Jul 2024 - Aug 2024",
    featured: true,
    description:
      "x0-GPT is a free AI tool that lets you interact with websites, PDFs, and documents in real-time. It provides quick answers and insights directly from your chosen sources, all while keeping your data private. It's easy to use and versatile, making information more accessible than ever.",
    technologies: [
      "Next.js",
      "Typescript",
      "Postgres",
      "Upstash rag-chat sdk",
      "Vercel ai sdk",
      "Supabase",
      "TailwindCSS",
      "Acternity UI",
      "Shadcn UI",
      "Magic UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://x0-gpt.devwtf.in",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://git.new/pvOF6aq",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/ffeIgzW.png",
    video: "",
  },
  {
    title: "Profanity Validator - a SDK for profanity moderation",
    href: "https://profanity.devwtf.in",
    dates: "28th Oct 2024 - 29th Oct 2024",
    featured: true,
    description:
      "If you run a web app with any kind of user generated content, it's your responsibility to keep things in order. That's a challenge if your users keep dropping F-bombs like confetti at a toddler's birthday party. That's what this SDK actually solves but with more moderation capabilities.",
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "NodeJs",
      "NPM",
      "react-hook-forms",
      "zod",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://profanity.devwtf.in",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://l.devwtf.in/profanity",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/KCJmPOa.png",
    video: "",
  },
  {
    title: "Acter - Ai to convert your ideas into UI",
    href: "https://acter.devwtf.in",
    dates: "Mar 2024 - May 2024",
    featured: false,
    active: false,
    description:
      "Acter is an Ai tool which will help you to convert your ideas into great UI and it supports a huge number of popular UI libraries and frameworks which will make your work easier to modify any existing code from any library. And also you can generate your UI using a particular framework and UI library.",
    technologies: [
      "Next.js",
      "Typescript",
      "Xata DB",
      "RAG",
      "Vercel ai sdk",
      "Postgress",
    ],
    links: [
      {
        type: "Website",
        href: "https://acter.devwtf.in",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://l.devwtf.in/acter",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/JwDi96s.png",
    video: "",
  },
  {
    title: "Evently - Chromium extension for event auditing",
    href: "https://evently.devwtf.in",
    dates: "Sept 2024 - Sept 2024",
    featured: false,
    description:
      "Your essential companion for event auditing. It features a straightforward countdown timer that can be displayed in new tabs within Chromium-based browsers, providing users with a simple yet effective way to track time until their event.",
    technologies: [
      "Next.js",
      "Typescript",
      "React",
      "TailwindCSS",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://evently.devwtf.in",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://git.new/ESRt29k",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/JI752LF.png",
    video: "",
  },
  {
    title: "FPC - Freelancer Price Calculator",
    href: "https://freelance-price-calculator.devwtf.in/",
    dates: "Sept 2024 - Sept 2024",
    featured: false,
    description:
      "A powerful and intuitive tool for freelancers to calculate project prices and convert currencies realtime.",
    technologies: [
      "Next.js",
      "Currency Api",
      "Typescript",
      "React",
      "TailwindCSS",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://freelance-price-calculator.devwtf.in/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://git.new/tValGOy",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "https://i.imgur.com/1zeZewW.png",
    video: "",
  },
  {
    title: "Shelf - My Own Library",
    href: "https://freelance-price-calculator.devwtf.in/",
    dates: "Feb 2025 - Feb 2025",
    featured: false,
    description:
      "I read books and papers every month around various topics and here are some of them that I recommend. ",
    technologies: [
      "Next.js",
      "Typescript",
      "React",
      "TailwindCSS",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://shelf.devwtf.in/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/SkidGod4444/shelf",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/assets/projects/shelf.png",
    video: "",
  },
  {
    title: "Telegram Member Adder",
    // href: "https://github.com/SkidGod4444/TeleGram-Member-Adder",
    dates: "Apr 2023 - Apr 2023",
    featured: false,
    archived: true,
    description:
      "A python code to scrap telegram group members data and adds them to another telegram group..",
    technologies: ["Scrapping", "Telegram API", "Python"],
    links: [
      {
        type: "Source",
        href: "https://github.com/SkidGod4444/TeleGram-Member-Adder",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
  {
    title: "Sputnik - My first python discord bot",
    // href: "https://github.com/SkidGod4444/TeleGram-Member-Adder",
    dates: "Oct 2022 - Sept 2023",
    featured: false,
    archived: true,
    description:
      "All in one python discord bot. Source code was migrated from Replit to Github later.",
    technologies: ["Discord.py", "Discord API", "Python", "Replit", "Json DB"],
    links: [
      {
        type: "Source",
        href: "https://github.com/SkidGod4444/Sputnik",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
];

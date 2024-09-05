import { Icons } from "@/components/icons";

export const PROJECTS = [
  {
    title: "x0-GPT - Ai powered brain",
    href: "https://x0-gpt.devwtf.in",
    dates: "Jul 2024 - Aug 2024",
    featured: true,
    active: true,
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
];

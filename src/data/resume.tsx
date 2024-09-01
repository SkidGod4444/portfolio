import { Icons } from "@/components/icons";
import { DraftingCompass, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Saidev Dhal",
  initials: "SDD",
  url: "https://devwtf.in",
  location: "Pune, India",
  locationLink: "https://maps.app.goo.gl/MUbpyutE7bxrpdVW9",
  timeZone: "Asia/Kolkata",
  localCode: "en-IN",
  description:
    "18 years old Technophile, Software Developer, and a Computer Science Student.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Javascript",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: DraftingCompass, label: "Projects" },
  ],
  contact: {
    email: "connect.saidev@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://git.new/skidgod",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/saidev-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/saidev-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://dub.sh/saidev-instagram",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/skidgod",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ellenox",
      href: "https://www.ellenox.com/",
      badges: [],
      location: "Remote",
      title: "Community Engagement Intern",
      logoUrl: "/ellenox.jpeg",
      start: "Apr 2024",
      end: "Jul 2024",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s5 nights & weekends",
      logoUrl: "/buildspace.jpg",
      start: "2024",
      end: "2024",
    },
    {
      school: "Dr.D.Y.Patil College of Arts, Commerce and Science",
      href: "https://ibo.org",
      degree: "11th and 12th Grade with Computer Science",
      logoUrl: "/dpu.png",
      start: "2023",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "x0-GPT",
      href: "https://x0-gpt.devwtf.in",
      dates: "Jul 2024 - Aug 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "Postgres",
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
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;

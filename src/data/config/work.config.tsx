import { ExternalLink } from "lucide-react";

export const WORK = [
  {
    title: "Indian Institute of Technology Madras",
    role: "Tech Lead Intern",
    dates: "Mar - Present, 2025",
    location: "Remote, CNDE Lab Madras (India)",
    description:
      "I’m leading product development and strategy for cutting-edge tech initiatives. I work closely with engineering team & professor to build this MVP.",
    image: "/iitm.png",
    links: [
      {
        title: "Proof",
        href: "#",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  },
  {
    title: "Ellenox",
    role: "Community Engagement Intern",
    dates: "Apr - Jun, 2024",
    location: "Remote, Hydrabad (India)",
    description:
      "I managed hackathons and tech support for the Ellenox community. I also managed the Ellenox Discord server of 2000+ members.",
    image: "/ellenox.jpeg",
    links: [
      // {
      //   title: "Website",
      //   href: "https://www.ellenox.com/",
      //   icon: <Link className="size-3" />,
      // },
      {
        title: "Proof",
        href: "https://dub.sh/saidev-linkedin",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  },
];

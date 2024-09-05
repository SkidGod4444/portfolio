import { ExternalLink, Link } from "lucide-react";

export const WORK = [
  {
    title: "Ellenox",
    role: "Community Engagement Intern",
    dates: "Apr - Jun, 2024",
    location: "Remote, Hydrabad (India)",
    description:
      "I managed hackathons and tech support for the Ellenox community. I also managed the Ellenox Discord server of 2000+ members.",
    image: "/ellenox.jpeg",
    mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    links: [
      {
        title: "Website",
        href: "https://www.ellenox.com/",
        icon: <Link className="size-3" />,
      },
      {
        title: "Proof",
        href: "https://dub.sh/saidev-linkedin",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  },
];

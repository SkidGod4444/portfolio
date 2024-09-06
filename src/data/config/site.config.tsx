import { Icons } from "@/components/icons";

export const DATA = {
  name: "Saidev Dhal",
  initials: "SDD",
  url: "https://saidevdhal.xyz",
  resume: "https://saidevdhal.xyz",
  prevImage: "https://i.imgur.com/zTtzvAu.png",
  myImage: "/me2.png",
  location: "Pune, India",
  locationLink: "https://maps.app.goo.gl/MUbpyutE7bxrpdVW9",
  timeZone: "Asia/Kolkata",
  localCode: "en-IN",
  description:
    "18-year-old tech enthusiast, indie hacker, entrepreneur and OSS contributor.",
  about:
    "I'm a super introvert nurtured in a small state [Odisha, India](https://maps.app.goo.gl/SFCDCshEyR96jmNUA), passionate about building impactful products that leverage technology to make a difference. I often share my work to [contribute](https://git.new/skidgod) to the community. In addition to my development work, I'm always exploring new ideas, particularly in areas like machine learning and robotics.\n\n In my free time i play games, listen music also i love to read books of *self-help* genre. I'm a huge fan of Iron Man. He inspires me a lot.\n\nIt's a pleasure to meet you!",
  bio: "I'm a super introvert nurtured in a small state [Odisha, India](https://maps.app.goo.gl/SFCDCshEyR96jmNUA), passionate about building impactful products that leverage technology to make a difference. I often share my work to [contribute](https://git.new/skidgod) to the community. In addition to my development work, I'm always exploring new ideas, particularly in areas like machine learning and robotics.",
  career:
    "I started as a self-taught developer at the age of 14, while I was in 8th grade and it's been a rollercoaster ride since then. Am aka [SkidGod](https://dub.sh/skidgod) on the internet. Won't you ask me what does it mean? [Click here to know](/about).",
  careerFull:
    "I began my journey as a self-taught developer at 14, during 8th grade, and it's been a rollercoaster ever since. Online, I'm known as [SkidGod](https://dub.sh/skidgod), a name that reflects my roots—starting as an unskilled 'skid' using others' scripts.\n\nBack in 2019, I was just an average school kid with little tech knowledge. When the pandemic hit, everything moved online, and I got a Redmi 8 for attending classes. But, I quickly turned it into a gaming device, getting hooked on ***Free Fire***. This led me to join Discord gaming servers, where I discovered the world of Discord bots.\n\nI met a guy named Priyanshu, the creator of the 'Groot' bot, and got inspired. I spent a year skidding code on Replit, eventually learning Python. I then built a successful Discord bot, 'Floater,' with over 3 million users and 5,000 servers. Despite being bullied for being a 'skid,' I embraced the name SkidGod and started contributing to open-source Discord bots.\n\nAnd that's how my career began.",
  avatarUrl: "/me.jpg",
  connect:
    "Let's connect and build something cool together. Feel free to reach out to me. I'm always open to new opportunities and collaborations. Reach out to me via **email: (connect.saidev@gmail.com)** or dm me on [Twitter](https://dub.sh/saidev-twitter) or [Instagram](https://dub.sh/saidev-instagram).",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Javascript",
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

  education: [
    {
      school: "Buildspace",
      location: "Remote, San Francisco",
      href: "https://buildspace.so",
      degree: "s5 nights & weekends",
      logoUrl: "/buildspace.jpg",
      start: "2024",
      end: "2024",
    },
    {
      school: "Dr.D.Y.Patil College of Arts, Commerce and Science",
      location: "Pune, India",
      href: "https://www.dypcoeakurdi.ac.in",
      degree: "11th and 12th Grade with Computer Science",
      logoUrl: "/dpu.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "NRI international School",
      location: "Odisha, India",
      href: "https://g.co/kgs/WA4rWNS",
      degree: "9th and 10th Schooling ",
      logoUrl: "/nri.png",
      start: "2021",
      end: "2023",
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

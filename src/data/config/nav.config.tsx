import {
  DraftingCompass,
  HomeIcon,
  Library,
  Newspaper,
  NotebookIcon,
  PersonStanding,
} from "lucide-react";

export const navItems = [
  {
    link: "/",
    icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    name: "Home",
  },
  {
    link: "/about",
    icon: (
      <PersonStanding className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
    name: "About",
  },
  {
    link: "https://shelf.devwtf.in/",
    icon: (
      <Library className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
    name: "Shelf",
  },
  {
    link: "/projects",
    icon: (
      <DraftingCompass className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
    name: "Projects",
  },
  {
    link: "/blog",
    icon: <NotebookIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    name: "Blogs",
  },
  {
    link: "/guestbook",
    icon: <Newspaper className="h-4 w-4 text-neutral-500 dark:text-white" />,
    name: "Guestbook",
  },
];

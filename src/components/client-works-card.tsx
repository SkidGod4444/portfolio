import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Markdown from "react-markdown";
import { Icons } from "./icons";
import CustomVideoDialog from "./magicui/custom-video-dialog";

interface Props {
  title: string;
  testimonial: string;
  worktype?: string;
  description: string;
  fatures: string;
  dates?: string;
  tags: readonly string[];
  link?: string;
  image?: string | null;
  video?: string;
}

export function ClientWorksCard({
  title,
  testimonial,
  worktype,
  description,
  fatures,
  dates,
  tags,
  link,
  image,
  video,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      {video ? (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
        />
      ) : image ? (
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="h-40 w-full overflow-hidden object-cover object-top"
        />
      ) : (
        <Image
          src="/assets/projects/404.jpg"
          alt={title}
          width={500}
          height={300}
          className="h-40 w-full overflow-hidden object-cover object-top"
        />
      )}
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
          {fatures && (
            <>
              <h4 className="text-sm font-semibold mt-2 mb-1">Cool features:</h4>
              <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                {`- ${fatures.split('.').filter(Boolean).map(feature => feature.trim()).join('\n- ')}`}
              </Markdown>
              <span className="text-pretty font-sans text-xs text-muted-foreground">and many more...</span>
            </>
          )}
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {worktype && (
          <Badge className="flex gap-2 px-2 py-1 text-[10px] ml-1">
            <Icons.setting className="size-4" />
            {worktype}
          </Badge>
        )}
        {testimonial && (
          <CustomVideoDialog videoSrc={testimonial}
          animationStyle="top-in-bottom-out">
            <Badge className="flex gap-2 px-2 py-1 text-[10px] ml-1 bg-blue-400 hover:bg-blue-500 cursor-pointer">
            <Icons.video className="size-4" />
            Testimonial
          </Badge>
          </CustomVideoDialog>
        )}
      </CardFooter>
    </Card>
  );
}

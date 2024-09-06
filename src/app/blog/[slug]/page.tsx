import { getPost } from "@/data/blog";
import { DATA } from "@/data/config/site.config";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  const post = await getPost(params.slug);

  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    icon,
  } = post.metadata;

  const ogImage = icon
    ? `${DATA.url}${icon}`
    : `${DATA.url}/assets/blogs/not-found.jpeg`;

  return {
    title,
    description,
    keywords: description
      .split(/[.?]/)
      .map((sentence: string) => sentence.trim())
      .filter((sentence: string) => sentence.length > 0),
    authors: [
      {
        name: `${DATA.name}`,
        url: `${DATA.url}/blog/${post.slug}`,
      },
    ],
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      site: DATA.url,
      creator: `${DATA.name}`,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound(); // Trigger 404 page
  }

  if (post && post.metadata) {
    return (
      <section id="blog">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${DATA.url}${post.metadata.image}`
                : `${DATA.url}/og?title=${post.metadata.title}`,
              url: `${DATA.url}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: DATA.name,
              },
            }),
          }}
        />
        <div className="flex justify-start items-center mb-2 text-sm max-w-[650px]">
          <Suspense fallback={<p className="h-5" />}>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              - {formatDate(post.metadata.publishedAt)}
            </p>
          </Suspense>
        </div>
        <h1 className="title font-bold md:text-5xl text-3xl tracking-tighter max-w-[650px]">
          {post.metadata.title}
        </h1>
        <div className="flex justify-start items-center mt-2 mb-8 text-sm max-w-[650px]">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 ml-1">
            - it&apos;s a &quot;{post.metadata.readTime} read&quot; blog.
          </p>
        </div>
        <article
          className="prose dark:prose-invert md:mb-0 mb-10"
          dangerouslySetInnerHTML={{ __html: post.source }}
        ></article>
      </section>
    );
  } else {
    notFound();
  }
}

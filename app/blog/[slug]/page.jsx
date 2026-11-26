import { notFound } from "next/navigation";
import { getPosts } from "../../lib/posts";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPosts().find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.description, openGraph: { title: post.title, description: post.description } };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPosts().find((item) => item.slug === slug);
  if (!post) notFound();
  return <main className="p-4"><h1>{post.title}</h1><p>{post.description}</p></main>;
}

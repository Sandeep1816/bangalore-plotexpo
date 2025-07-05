import BlogGridPost from "@/app/components/blogs/blogGridPost";
import { getBlogPostBySlug } from "@/sanity/lib/blogs";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const blog = (await getBlogPostBySlug(slug)) || null;

  if (!blog) {
    return notFound();
  }

  return <BlogGridPost blog={blog} />;
}

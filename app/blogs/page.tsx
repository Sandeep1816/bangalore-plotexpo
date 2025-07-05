import BlogGridClient from "@/app/components/ui/blogGridComponent";
import { getBlogPostsByProject } from "@/sanity/lib/blogs";

export default async function NewsBlogGrid() {
  const posts = await getBlogPostsByProject("bpe");

  return (
    <section className="bg-white">
      <BlogGridClient posts={posts} />
    </section>
  );
}

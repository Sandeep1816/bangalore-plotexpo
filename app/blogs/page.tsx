
const revalidate=60

import { getBlogPostsByProject } from "@/lib/blogs";
import BlogGridClient from "../components/blogs";

export default async function NewsBlogGrid() {
  const posts = await getBlogPostsByProject("bpe");

  return (
    <section className="bg-white">
      <BlogGridClient posts={posts} />
    </section>
  );
}

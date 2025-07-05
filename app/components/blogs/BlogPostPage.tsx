// app/components/blogs/BlogDetail.tsx
import type { Blog } from "@/types/blog";
import PortableTextRenderer from "@/app/components/utils/PortableTextRenderer";

export default function BlogDetail({ blog }: { blog: Blog }) {
  return (
    <section className="px-4 md:px-16 lg:px-28 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-8">
        By {blog.author?.name || "Unknown Author"} •{" "}
        {new Date(blog.publishedAt).toDateString()}
      </p>
      {blog.mainImage && (
        <img
          src={blog.mainImage}
          alt={blog.title}
          className="w-full h-auto mb-10 rounded-md object-cover"
        />
      )}
      <PortableTextRenderer value={blog.body} />
    </section>
  );
}

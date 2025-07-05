"use client"
import PortableTextRenderer from "@/app/components/utils/PortableTextRenderer";
import { getBlogPostBySlug } from "@/sanity/lib/blogs"; // Update this to your actual fetch function
import { notFound } from "next/navigation";


export default async function BlogGridPost({ blog} : any) {

  if (!blog) {
    return notFound();
  }

  return (
    <section className="px-4 md:px-16 lg:px-28 py-12 max-w-5xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-6">{blog.title}</h1>

      {/* Author & Date */}
      <p className="text-gray-500 text-sm mb-8">
        By {blog.author?.name || "Unknown Author"} • {new Date(blog.publishedAt).toDateString()}
      </p>

      {/* Main Image */}
      {blog.mainImage && (
        <img
          src={blog.mainImage}
          alt={blog.title}
          className="w-full h-auto mb-10 rounded-md object-cover"
        />
      )}

      {/* Body Content */}
      <PortableTextRenderer value={blog.body} />
    </section>
  );
}

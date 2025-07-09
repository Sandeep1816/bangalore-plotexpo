import { client } from "../client";
import type { SanityDocument } from "@sanity/client";

import {
  blogPostBySlug,
  blogPostsByProject,
  categoriesByProject,
} from "../queries";

export async function getBlogPostsByProject(
  slug: string
): Promise<SanityDocument[]> {
  return await client.fetch(
    blogPostsByProject,
    { slug },
    { cache: "no-store" }
  );
}

export async function getBlogPostBySlug(slug: string) {
  const post = await client.fetch(
    blogPostBySlug,
    { slug },
    { cache: "no-store" }
  );
  return post;
}

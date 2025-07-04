export const blogPostsByProject = `*[
  _type == "blogPost" &&
  defined(slug.current) &&
  project->slug.current == $slug
] | order(publishedAt desc)[0...12] {
  _id,
  title,
 "mainImage": mainImage.asset->url,
 "categories": categories[]->title,
  "slug": slug.current,
  "author": author-> name ,
  publishedAt
}`;


export const blogPostBySlug = `*[_type == "blogPost" && slug.current == $slug][0]{
    title,
    "mainImage": mainImage.asset->url,
    publishedAt,
    body,
    author->{ name }
  }`;
// types/blog.ts
export interface Blog {
  title: string;
  mainImage?: string;
  publishedAt: string;
  body: any;
  author?: {
    name?: string;
  };
}

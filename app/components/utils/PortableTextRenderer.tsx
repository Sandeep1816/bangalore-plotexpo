import { PortableText } from "@portabletext/react";

const components = {
  types: {
    image: ({ value }: any) => (
      <img src={value.asset.url} alt={value.alt || ""} className="my-4" />
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-blue-600 underline">
        {children}
      </a>
    ),
  },
  block: {
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-8 mb-2">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-semibold mt-6 mb-2">{children}</h3>,
    normal: ({ children }: any) => <p className="mb-4 text-gray-800">{children}</p>,
  },
};

export default function PortableTextRenderer({ value }: { value: any }) {
  return <PortableText value={value} components={components} />;
}

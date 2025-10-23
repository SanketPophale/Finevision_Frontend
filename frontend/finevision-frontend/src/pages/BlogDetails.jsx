import { useParams, Link } from "react-router-dom";
import { blogsData } from "../data/blogData";
import { motion as Motion } from "framer-motion";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === parseInt(id));

  if (!blog) return <p className="text-center mt-20 text-white">Blog not found.</p>;

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#081229] via-[#132f56] to-[#1e3a8a] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
    

        <h1 className="text-3xl font-extrabold text-[#4d9feb] mb-2">{blog.title}</h1>
        <p className="opacity-70 mb-6">
          Written by {blog.author} • {blog.date}
        </p>

        <div
          className="text-gray-200 leading-relaxed space-y-5"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#6f42c1] to-[#4d9feb] text-white font-semibold shadow-xl hover:opacity-90"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </section>
  );
}

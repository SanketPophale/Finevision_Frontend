import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div className="rounded-3xl overflow-hidden shadow-xl border border-white/20 bg-white/10 backdrop-blur-lg hover:scale-105 transition duration-500">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#4d9feb] mb-2">{blog.title}</h3>
        <p className="text-sm opacity-70 mb-2">{blog.date} • {blog.author}</p>
        <p className="text-gray-300 line-clamp-3 mb-4">{blog.excerpt}</p>
        <Link
          to={`/blog/${blog.id}`}
          className="inline-block px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#6f42c1] to-[#4d9feb] text-white hover:opacity-90"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}

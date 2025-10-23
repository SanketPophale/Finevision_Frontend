import { blogsData } from "../data/blogData";
import BlogCard from "../components/BlogCard";
import { motion as Motion } from "framer-motion";

export default function Blog() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#081229] via-[#132f56] to-[#1e3a8a] text-white py-16 px-6">
      <Motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold text-[#4d9feb] mb-3">Finevision Blog</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Discover expert insights, patient stories, and the latest updates in vision care and therapy.
        </p>
      </Motion.div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {blogsData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

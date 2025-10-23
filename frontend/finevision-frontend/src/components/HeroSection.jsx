import { motion as Motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-sky-100 via-blue-100 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-center">
      <Motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-blue-950 dark:text-yellow-300"
      >
        Welcome to <span className="text-sky-700 dark:text-yellow-400">FineVision</span>
      </Motion.h1>
      <p className="mt-4 text-slate-700 dark:text-slate-300 text-lg max-w-2xl mx-auto">
        Experience professional eye care, personalized vision therapy, and advanced diagnostic solutions — all in one place.
      </p>
    </section>
  );
}

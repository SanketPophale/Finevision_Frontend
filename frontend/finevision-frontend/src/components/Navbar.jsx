import { NavLink, Link } from "react-router-dom";
import logo from "../assets/log11.png"; // make sure this path is correct

export default function Navbar() {
  const base =
    "px-3 py-2 text-sm font-large text-gray-800 hover:text-white dark:text-gray-200 dark:hover:text-yellow-300 transition";
  const active =
    "font-bold text-blue-900 dark:text-yellow-400 decoration-2";

  return (
    <header className="sticky top-0 z-50 bg-black dark:bg-slate-900/80 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* ---------- Left: Logo + Clinic Name ---------- */}
          <Link to="/" className="flex items-center gap-4">
            <img
              src={logo}
              alt="Fine Vision Logo"
              className="h-14 w-14 object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-2xl font-extrabold tracking-wide text-blue-950 dark:text-yellow-300">
                FINE<span className="text-sky-600 dark:text-yellow-400">VISION</span>
              </h1>
              <p className="text-xs italic text-gray-600 dark:text-slate-400">
                Eye Care & Vision Therapy Center
              </p>
            </div>
          </Link>

          {/* ---------- Center: Navigation Links ---------- */}
          <nav className="hidden md:flex items-center gap-10 ml-16 ">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              About Me
            </NavLink>
            <NavLink
              to="/vision-therapy"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Vision Therapy
            </NavLink>
            <NavLink
              to="/sports-vision"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Sports Vision
            </NavLink>
            <NavLink
              to="/patient-form"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Patient Form
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              Contact
            </NavLink>
          </nav>

          {/* ---------- Right: Buttons ---------- */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-8 py-2 text-sm rounded-full border border-gray-400 text-gray-800 hover:bg-gray-100 dark:border-slate-600 dark:text-gray-200 dark:hover:bg-slate-800 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-2 text-sm rounded-full bg-blue-900 text-white font-semibold hover:bg-blue-800 dark:bg-yellow-400 dark:text-slate-900 dark:hover:bg-yellow-300 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/services",
    title: "Services",
  },
  {
    path: "/pricing",
    title: "Pricing",
  },
  {
    path: "/cars",
    title: "Cars",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];
const NavBer = () => {
  const [menuOpen, setMenuOpen] = useState();
  const pathname = usePathname();
  return (
    <div>
      {/* desktop */}
      <nav className="flex justify-between items-center w-full sm:w-11/12 mx-auto py-8 px-3">
        <Link
          href="/"
          className="text-2xl font-semibold flex flex-col gap-0 leading-5"
        >
          <span className="">SHARIATPUR</span>{" "}
          <span className="text-[#01d28e]">rent-a-car</span>
        </Link>
        <ul className="hidden  md:flex items-center justify-center gap-5">
          {navLinks.map(({ path, title }) => {
            const isActive = pathname === `${path}`;
            return (
              <li className="" key={path}>
                <Link className={isActive ? "active" : ""} href={path}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? (
            <FaTimes className="w-6 h-6 text-[#01d28e]"></FaTimes>
          ) : (
            <FaBars className="w-6 h-6 text-[#01d28e]"></FaBars>
          )}
        </div>
      </nav>
      {/* mobile */}
      {menuOpen && (
        <div className="text-slate-200 text-xl absolute z-40 transition duration-500 bg-[#01d28e] w-full md:hidden">
          <ul className="rounded-md shadow py-4 mx-2 flex flex-col justify-center items-center gap-5">
            {navLinks.map(({ path, title }) => {
              const isActive = pathname === `${path}`;
              return (
                <li className="" key={path}>
                  <Link
                    className={isActive ? "text-[#053324]" : "text-white"}
                    href={path}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBer;

"use client";
import { afterLogin, beforeLogin } from "@/data/navLinks";
import useAuth from "@/lib/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBer = () => {
  const [menuOpen, setMenuOpen] = useState();
  const pathname = usePathname();
  const { user } = useAuth();
  const navLinks = user ? afterLogin : beforeLogin;
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
          {user && (
            <div
              style={{
                border: "2px solid black",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <Image
                src={user.photoURL}
                width={40}
                height={40}
                alt="user_img"
              />
            </div>
          )}
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

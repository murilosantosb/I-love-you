"use client";

import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full bg-pink-100 text-gray-800 shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo ou título */}
        <h1 className="text-2xl font-semibold tracking-wide">Nossa Jornada 💖</h1>

        {/* Menu */}
        <ul className="flex space-x-6 text-lg font-light">
          <li>
            <Link href="/" scroll={false} className="hover:text-pink-600 transition">
              Passado
            </Link>
          </li>
          <li>
            <Link href="/surpresa" scroll={false} className="hover:text-pink-600 transition">
              Presente
            </Link>
          </li>
          <li>
            <Link href="/futuro" scroll={false} className="hover:text-pink-600 transition">
              Futuro
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

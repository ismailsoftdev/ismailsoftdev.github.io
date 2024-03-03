import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-center text-lg">
      <ul className="flex space-x-6">
        <li className="hover:text-gray-400">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-gray-400">
          <a href="/about">About</a>
        </li>
        <li className="hover:text-gray-400">
          <a href="/projects">Projects</a>
        </li>
        <li className="hover:text-gray-400">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

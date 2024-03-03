"use client";
import React, { useState, useEffect } from "react";

// Component
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <div className="container mx-auto m-2">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-x-6">
          {/* Navs */}
          <Nav />
          <ThemeToggler />
          {/* Mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

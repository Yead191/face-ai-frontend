"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Drawer, ConfigProvider } from "antd";
import navItems from "@/constants/navItem";
import Link from "next/link";
import PrimaryButton from "../buttons/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [activePath, setActivePath] = useState<string>("#home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const currentHash = window.location.hash || "#home";
    setActivePath(currentHash);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPosition = scrollY + 120;

      navItems.forEach((item) => {
        const section = document.getElementById(item.href.substring(1));
        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActivePath(item.href);
          }
        }
      });

      if (scrollY > lastScrollTop.current && scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollTop.current = Math.max(scrollY, 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleNavScroll = useCallback((e: React.MouseEvent, path: string) => {
    e.preventDefault();
    const id = path.substring(1);
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActivePath(path);
      window.location.hash = path;
    }
  }, []);


  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    const refresh = () => AOS.refresh();
    window.addEventListener("resize", refresh);
    return () => window.removeEventListener("resize", refresh);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-500 bg-[#000000]
        ${showNavbar ? "translate-y-0" : "-translate-y-28"}`}
    >
      <div className="container py-5 transition-colors duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={180}
              height={80}
              className="h-8 lg:h-10 w-fit"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavScroll(e, item.href)}
                className={`text-sm transition-all duration-300 ${
                  activePath === item.href
                    ? "font-semibold text-white"
                    : "text-white/80 hover:text-white/70"
                }`}
              >
                {item.labelKey}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="font-medium">
              Sign In
            </Link>
            <PrimaryButton>Get Started</PrimaryButton>

            {/* Mobile Menu */}
            <button
              className="lg:hidden text-xl"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuOutlined />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer (Mobile) */}
      <ConfigProvider>
        <Drawer
          title={<span className="font-semibold text-lg">Menu</span>}
          placement="right"
          width={280}
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
        >
          <div className="flex flex-col gap-6 mt-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  handleNavScroll(e, item.href);
                  setDrawerOpen(false);
                }}
                className={`text-base transition-all ${
                  activePath === item.href
                    ? "font-semibold pl-4 py-2 rounded-lg bg-primary text-white"
                    : "hover:text-primary text-black"
                }`}
              >
                {item.labelKey}
              </a>
            ))}

            <button className="bg-[#06825C] text-white px-6 py-2 rounded-full text-sm w-full">
              Download App
            </button>
          </div>
        </Drawer>
      </ConfigProvider>
    </nav>
  );
}

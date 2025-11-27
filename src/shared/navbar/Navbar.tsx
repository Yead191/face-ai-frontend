"use client";
import React, { useState, useEffect, useRef } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Drawer, ConfigProvider } from "antd";
import navItems from "@/constants/navItem";
import Link from "next/link";
import PrimaryButton from "../buttons/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = globalThis.scrollY;

      // Background change
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      setIsScrolled(scrollY > bannerHeight - 80);

      // Navbar hide / show
      if (scrollY > lastScrollTop.current && scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollTop.current = Math.max(0, scrollY);
    };

    globalThis.addEventListener("scroll", handleScroll);
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect hash changes for active link highlight
  useEffect(() => {
    const updateActiveSection = () => {
      const hash = globalThis.location.hash.replace("#", "");
      if (hash) setActiveSection(hash);
    };

    updateActiveSection();

    globalThis.addEventListener("hashchange", updateActiveSection);
    return () =>
      globalThis.removeEventListener("hashchange", updateActiveSection);
  }, []);

  // Scroll to correct section dynamically
  const handleScrollToSection = (e: any, id: any) => {
    e.preventDefault();

    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setActiveSection(id.replace("#", ""));
    globalThis.location.hash = id;
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });

    // refresh AOS after images load or DOM changes
    const handleResize = () => AOS.refresh();
    globalThis.addEventListener("resize", handleResize);

    return () => {
      globalThis.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`sticky  top-0 z-50 w-full transition-all duration-500 
        bg-[#000000] ${showNavbar ? "translate-y-0" : "-translate-y-28"}
      `}
    >
      <div className="container py-5 transition-colors duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0 ">
            <Image
              src="/Logo.png"
              alt="Face AI Logo"
              width={180}
              height={80}
              className="h-8 lg:h-10  w-fit"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.href)}
                className={`text-sm transition-all duration-300 
                  ${
                    activeSection === item.href.replace("#", "")
                      ? "font-semibold text-white"
                      : "text-white/80 hover:text-white/70"
                  }
                `}
              >
                {item.labelKey}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <Link href={"/auth/login font-medium"}>Sign In</Link>
              <PrimaryButton>Get Started</PrimaryButton>
            </div>

            {/* Mobile Menu Icon */}
            <button
              className="lg:hidden text-xl"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuOutlined />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer for Mobile */}
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
                  handleScrollToSection(e, item.href);
                  setDrawerOpen(false);
                }}
                className={`text-base transition-all 
                  ${
                    activeSection === item.href.replace("#", "")
                      ? "font-semibold pl-4 py-2 rounded-lg bg-primary text-white"
                      : "hover:text-primary text-black"
                  }
                `}
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

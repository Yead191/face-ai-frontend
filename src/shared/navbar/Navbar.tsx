"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { Button, Dropdown, Drawer, ConfigProvider } from "antd";
import { usePathname, useRouter } from "next/navigation";
import navItems from "@/constants/navItem";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      const scrollY = globalThis.scrollY;
      // console.log("scroll", scrollY);
      // Change navbar background after banner
      setIsScrolled(scrollY > bannerHeight - 80);

      // Hide/show logic
      if (scrollY > lastScrollTop.current && scrollY > 100) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;
    };

    globalThis.addEventListener("scroll", handleScroll);
    // console.log("inside");
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      if (window.scrollY > bannerHeight - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0  z-50 w-full transition-all duration-500 navbar-container 
        bg-[#000000] ${showNavbar ? "translate-y-0" : "-translate-y-28"}
      `}
    >
      <div className={`container  py-5 transition-colors duration-300`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"} className="shrink-0 -mt-2">
            <Image
              src="/Logo.png"
              alt="Face AI Logo"
              width={180}
              height={80}
              className="h-12 lg:h-14 w-fit"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-sm lg:text-xs 2xl:text-sm transition-all duration-300 ${
                  item.href === pathname
                    ? "relative font-semibold rounded-full text-white"
                    : "text-[#FFFFFF]/80 hover:text-[#FFFFFF]/70"
                }`}
              >
                {[item.labelKey]}
              </Link>
            ))}
          </div>

          {/* Right Section - Language + Download + Menu */}
          <div className="flex items-center gap-4">
            {/* Download Button (Hidden on Small Devices) */}
            <button className="cursor-pointer hidden lg:block bg-[#06825C] text-white px-6 py-2 rounded-full transition-colors text-base font-semibold">
              Download App
            </button>

            {/* Mobile Menu Icon */}
            <button
              className="lg:hidden  text-xl"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuOutlined />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer for Mobile */}
      <ConfigProvider
        theme={
          {
            // components: {
            //   Drawer: {
            //     colorBgElevated: "#171717",
            //     colorText: "rgba(255,255,255,0.88)",
            //   },
            // },
          }
        }
      >
        <Drawer
          title={
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">Menu</span>
              {/* <CloseOutlined onClick={() => setDrawerOpen(false)} /> */}
            </div>
          }
          placement="right"
          width={280}
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
        >
          <div className="flex flex-col gap-6 mt-4">
            {navItems?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`${
                  item.href === pathname
                    ? "relative font-semibold pl-4 -ml-4 py-2 rounded-lg  bg-primary! text-white! backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    : " hover:text-primary text-[#000000]!"
                } text-base   transition-all`}
                onClick={() => setDrawerOpen(false)}
              >
                {[item.labelKey]}
              </Link>
            ))}

            {/* Download Button */}
            <button className="bg-[#06825C] text-white px-6 py-2 rounded-full transition-colors text-sm w-full">
              Download App
            </button>
          </div>
        </Drawer>
      </ConfigProvider>
    </nav>
  );
}

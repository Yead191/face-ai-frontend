import Navbar from "@/shared/navbar/Navbar";
import React from "react";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <Navbar />
      <section>{children}</section>
      <footer></footer>
    </main>
  );
}

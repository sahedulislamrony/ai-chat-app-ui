"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export function MainHomeLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="h-screen flex">
      {/* sidebar */}
      <Sidebar isOpen={isOpen} />

      <div className="flex-1 flex flex-col bg-background">
        {/* header */}
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isOpen} />
        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
    </div>
  );
}

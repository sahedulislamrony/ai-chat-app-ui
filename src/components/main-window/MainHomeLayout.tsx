"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { useIsMobile } from "@/hooks/use-mobile";

export function MainHomeLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isMobile !== undefined) {
      setIsOpen(!isMobile);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="h-screen flex relative">
      {/* mobile overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        isOpen={isOpen}
        isMobile={isMobile}
        onClose={() => setIsOpen(false)}
      />

      <div className="flex-1 flex flex-col bg-background min-w-0">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isOpen} />
        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
    </div>
  );
}

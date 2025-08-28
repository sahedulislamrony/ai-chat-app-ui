"use client";

import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Header, Sidebar } from "@/components/main-window";

interface MainHomeLayoutProps {
  children: React.ReactNode;
}

export function MainHomeLayout({ children }: MainHomeLayoutProps) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isMobile !== undefined) {
      setIsOpen(false);
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
          className="fixed inset-0 bg-black/50 backdrop-blur-xl z-40 lg:hidden"
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
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isOpen} />
        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
    </div>
  );
}

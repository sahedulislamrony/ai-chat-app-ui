import { Copyright, Plus, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  isMobile?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen, isMobile, onClose }: SidebarProps) {
  return (
    <div
      className={cn(
        "transition-all duration-300 bg-background border-r border-foreground/20 overflow-hidden flex flex-col",
        {
          "w-64": isOpen && !isMobile,
          "w-80": isOpen && isMobile,
          "w-0": !isOpen,
          "fixed left-0 top-0 h-full z-50": isMobile,
          relative: !isMobile,
        }
      )}
    >
      <div className="flex items-center justify-between py-4 px-3  border-b border-foreground/20">
        <Logo />
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-600 dark:text-gray-400 rounded-full "
          >
            <X className="size-6 text-4xl" />
          </Button>
        )}
      </div>

      {/* Main Content */}
      <MainContent />

      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2 ">
      <Sparkles className="w-6 h-6 text-gray-800 dark:text-gray-400" />
      <span className="text-gray-800 font-semibold dark:text-gray-400 text-base sm:text-lg">
        SmartGPT
      </span>
    </div>
  );
}

function Footer() {
  return (
    <div className="p-4 border-t border-foreground/20">
      <p className="text-xs text-gray-500 text-center">
        <Copyright className="w-3 h-3 inline-block mr-1" />{" "}
        {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-1 p-4 space-y-5">
      <Button
        variant="outline"
        className="w-full border-foreground/20 dark:text-gray-400 text-gray-800 dark:hover:text-white text-sm sm:text-base"
      >
        <Plus className="w-4 h-4 mr-2" /> New chat
      </Button>
      <div className="text-gray-700 dark:text-gray-400 text-sm">
        <div className="py-2 px-3 rounded cursor-pointer hover:bg-foreground/10 transition-colors">
          Recent conversations
        </div>
      </div>
    </div>
  );
}

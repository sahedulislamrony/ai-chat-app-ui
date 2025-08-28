import { Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-0"
      } transition-all duration-300 bg-background border-r border-gray-700 overflow-hidden flex flex-col`}
    >
      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-black dark:text-white" />
          <span className="text-black font-semibold dark:text-white">
            SmartGPT
          </span>
        </div>
        <Button
          variant="outline"
          className="w-full mb-4 border-gray-600 dark:text-white text-black dark:hover:text-white"
        >
          <Plus /> New chat
        </Button>
        <div className="text-gray-400 text-sm">
          <div className="py-2 px-3 rounded cursor-pointer">
            Recent conversations
          </div>
        </div>
      </div>
    </div>
  );
}

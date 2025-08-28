"use client";

import { Plus, AudioLines, SendHorizontal, LoaderCircle } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export function ChatInputBox() {
  const [inputValue, setInputValue] = useState<string | undefined>("");
  const [isSending, setIsSending] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue?.trim()) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (inputValue?.trim()) {
      console.log("Sending message:", inputValue);
      setIsSending(true);
      sleep(1000).then(() => {
        console.log("Message sent:", inputValue);
        setIsSending(false);
      });
      setInputValue("");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="w-full h-12 sm:h-14 lg:h-16 bg-transparent border rounded-full border-foreground/20 flex items-center px-2 sm:px-4 shadow-md shadow-black/30 dark:shadow-gray-300/6 mb-3">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 rounded-full shrink-0 w-8 h-8 sm:w-10 sm:h-10"
        >
          <Plus className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
        </Button>

        <input
          type="text"
          disabled={isSending}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          autoCapitalize="none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full h-full px-2 sm:px-3 rounded-0 border-0 focus:ring-0 focus:outline-none font-medium text-sm sm:text-base bg-transparent"
          placeholder="Ask anything..."
        />

        <div className="flex items-center justify-around gap-1 shrink-0">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 rounded-full w-8 h-8 sm:w-10 sm:h-10 hidden sm:flex"
          >
            <AudioLines className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="group text-gray-500 rounded-full w-8 h-8 sm:w-10 sm:h-10"
            disabled={isSending || !inputValue?.trim()}
            onClick={handleSubmit}
          >
            {!isSending && (
              <SendHorizontal className="w-4 h-4 sm:w-5 sm:h-5 -rotate-45 text-sky-400 group-disabled:text-gray-500" />
            )}
            {isSending && (
              <LoaderCircle className="w-4 h-4 sm:w-5 sm:h-5 animate-spin group-disabled:text-gray-500" />
            )}
          </Button>
        </div>
      </div>
      <p className="text-xs text-center text-gray-500 pb-2 px-2">
        GPT can make mistakes. Check important info.
      </p>
    </div>
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

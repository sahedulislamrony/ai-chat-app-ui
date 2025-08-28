import { messages } from "@/data/static_messages";
import { ChatInputBox } from "./ChatInputBox";
import { ChatWindow } from "./ChatWindow";

export function ChatContainer() {
  return (
    <div className="w-full h-[calc(100vh-64px)] bg-background flex flex-col">
      <div className="w-full flex-1 overflow-y-auto">
        <div className="w-full mx-auto h-full flex flex-col px-3 sm:px-4 lg:px-0">
          {/* Chat messages */}
          <ChatWindow data={messages} />
        </div>
      </div>

      {/* Fixed input at bottom */}
      <div className="w-full px-3 sm:px-4 lg:px-0 py-2 sm:py-0 bg-transparent">
        <ChatInputBox />
      </div>
    </div>
  );
}

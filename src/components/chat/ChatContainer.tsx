import { ChatInputBox } from "./ChatInputBox";
import { ChatWindow } from "./ChatWindow";

export function ChatContainer() {
  return (
    <div className="w-full h-[calc(100vh-64px)] bg-background  flex items-center justify-center ">
      <div className="w-full max-w-4xl bg-green-400 h-full relative px-5 lg:px-0 ">
        {/* chat messages */}
        <ChatWindow />

        <ChatInputBox />
      </div>
    </div>
  );
}

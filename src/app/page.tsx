import { ChatContainer } from "@/components/chat/ChatContainer";
import { ChatInputBox } from "@/components/chat/ChatInputBox";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { MainHomeLayout } from "@/components/main-window";
import { messages } from "@/data/static_messages";

export default function Home() {
  return (
    <MainHomeLayout>
      <ChatContainer>
        {/* Main Chat Area */}
        <ChatWindow data={messages} />

        {/* User Input box */}
        <ChatInputBox />
      </ChatContainer>
    </MainHomeLayout>
  );
}

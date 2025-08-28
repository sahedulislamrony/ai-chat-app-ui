import { MainHomeLayout } from "@/components/main-window";
import { ChatContainer } from "../components/chat/ChatContainer";

export default function Home() {
  return (
    <MainHomeLayout>
      <ChatContainer />
    </MainHomeLayout>
  );
}

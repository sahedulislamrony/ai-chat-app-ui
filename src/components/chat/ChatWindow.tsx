import { ChatMessage } from "@/types/chat";
import { UserMessage } from "./UserMessage";
import { ModelResponse } from "./ModelResponse";

export function ChatWindow({ data }: { data: ChatMessage[] | null }) {
  return (
    <div className="w-full mx-auto max-w-4xl bg-background pb-4 px-2 sm:px-0">
      {data &&
        data.length > 0 &&
        data.map((message, idx) => {
          if (message.role === "user") {
            return <UserMessage key={idx} {...message} />;
          }
          return <ModelResponse key={idx} {...message} />;
        })}
    </div>
  );
}

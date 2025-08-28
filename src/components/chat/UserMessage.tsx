import { UserRound } from "lucide-react";
import { ChatMessage } from "@/types/chat";
import { EmotionBadges } from "@/components/chat";

type UserMessageProps = ChatMessage;

export function UserMessage({ role, content, emotions }: UserMessageProps) {
  return (
    <div className="w-full flex justify-start items-center flex-row-reverse mt-4 sm:mt-7">
      <div className="flex items-start flex-row-reverse max-w-full sm:max-w-3xl lg:max-w-4xl">
        <div className=" rounded-full overflow-hidden w-4 h-4 sm:w-6 sm:h-6 mt-1 shrink-0 ml-1  ">
          <UserRound className="w-full h-full" />
        </div>
        <div className="h-full pr-0.5 md:pr-2 w-full min-w-0">
          <p className="text-sm sm:text-base font-normal text-left h-full bg-blue-500 text-white rounded-xl py-2 px-3 sm:px-4 break-words">
            {content}
          </p>

          {/* Emotions */}
          <EmotionBadges emotions={emotions} role={role} />
        </div>
      </div>
    </div>
  );
}

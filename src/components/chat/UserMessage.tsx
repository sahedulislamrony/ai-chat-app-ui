import { UserRound } from "lucide-react";
import { Badge } from "../ui/badge";
import { ChatMessage } from "@/types/chat";
import { getEmotionColor } from "./EmotionLavelDesign";

type UserMessageProps = ChatMessage;

export function UserMessage({ content, emotions }: UserMessageProps) {
  return (
    <div className="w-full flex justify-start items-center flex-row-reverse mt-7 ">
      <div className="flex items-start flex-row-reverse ">
        <div className="avatar rounded-full overflow-hidden size-8 mt-1">
          <UserRound className="w-full h-full" />
        </div>
        <div className="ml-2 h-full pr-2 w-full ">
          <div>
            <p className="text-md font-normal text-left max-w-3xl h-full bg-blue-500 text-white rounded-xl py-2 px-4 pr-1.5">
              {content}
            </p>
          </div>

          {/* emotions */}
          <div className="mt-2 flex flex-wrap gap-2 flex-row-reverse">
            {emotions.map((emotion, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`text-xs px-2 py-1 rounded-full ${getEmotionColor(
                  emotion.label
                )}`}
              >
                {emotion.label} {emotion.confidence}%
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { ChatMessage } from "@/types/chat";
import { Badge } from "../ui/badge";
import { Markdown } from "../ui/markdown";

import { getEmotionColor } from "./EmotionLavelDesign";

type ModelResponseProps = ChatMessage;

export function ModelResponse({ content, emotions }: ModelResponseProps) {
  return (
    <div className="w-full flex justify-start items-center mt-4 sm:mt-7">
      <div className="flex items-start max-w-full sm:max-w-3xl lg:max-w-4xl">
        <div className="rounded-full overflow-hidden w-6 h-6 sm:w-8 sm:h-8 bg-foreground/10 flex justify-center items-center text-xs sm:text-sm font-semibold mt-2 shrink-0 mr-0">
          AI
        </div>
        <div className="h-full pr-0.5 md:pr-2 w-full min-w-0">
          <div>
            <Markdown className="text-sm sm:text-base font-normal text-left h-full bg-transparent text-foreground rounded-xl py-2 px-3 sm:px-4 break-words">
              {content}
            </Markdown>
          </div>

          {/* Emotions */}
          <div className="mt-0 ml-3 flex flex-wrap gap-1 sm:gap-2">
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

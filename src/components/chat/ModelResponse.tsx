import { ChatMessage } from "@/types/chat";
import { Badge } from "../ui/badge";
import { Markdown } from "../ui/markdown";

import { getEmotionColor } from "./EmotionLavelDesign";

type ModelResponseProps = ChatMessage;

export function ModelResponse({ content, emotions }: ModelResponseProps) {
  return (
    <div className="w-full flex justify-start items-center mt-7 ">
      <div className="flex items-start">
        <div className=" rounded-full overflow-hidden size-8 bg-foreground/10 flex justify-center items-center p-5 font-semibold mt-2">
          AI
        </div>
        <div className="ml-2 h-full pr-2 w-full ">
          <div>
            <Markdown className="text-md font-normal text-left max-w-3xl h-full bg-transparent text-foreground rounded-xl py-2 px-4 pr-1.5">
              {content}
            </Markdown>
          </div>

          {/* emotions */}
          <div className="mt-0 ml-3 flex flex-wrap gap-2">
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

import { ChatMessage } from "@/types/chat";
import { EmotionBadges } from "@/components/chat";
import { Markdown } from "@/components/ui/markdown";
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
          <EmotionBadges emotions={emotions} role="assistant" />
        </div>
      </div>
    </div>
  );
}

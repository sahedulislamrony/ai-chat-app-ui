import { cn } from "@/lib/utils";
import { Emotion, Roles } from "@/types/chat";
import { getEmotionColor } from "@/components/chat";
import { Badge } from "@/components/ui/badge";

export function EmotionBadges({
  emotions,
  role,
}: {
  emotions: Emotion[];
  role: Roles;
}) {
  return (
    <div
      className={cn("flex flex-wrap gap-1 sm:gap-2 ", {
        "justify-end mt-2": role === "user",
        "justify-start mt-0 ml-3": role === "assistant",
      })}
    >
      {emotions.map((emotion, index) => (
        <Badge
          key={index}
          variant="secondary"
          className={`text-xs px-2 py-1 rounded-full  ${getEmotionColor(
            emotion.label
          )}`}
        >
          {emotion.label} {emotion.confidence}%
        </Badge>
      ))}
    </div>
  );
}

import { EmotionLabel } from "@/types/chat";

const emotionData: Record<EmotionLabel, string> = {
  Frustration:
    "bg-red-100/50 dark:bg-red-900/20 text-red-800 dark:text-red-400",
  Curiosity:
    "bg-purple-100/50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400",
  Determination:
    "bg-orange-100/50 dark:bg-orange-900/20 text-orange-800 dark:text-orange-400",
  Helpfulness:
    "bg-blue-100/50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400",
  Enthusiasm:
    "bg-yellow-100/50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400",
  Patience:
    "bg-green-100/50 dark:bg-green-900/20 text-green-800 dark:text-green-400",
  Confusion:
    "bg-gray-100/50 dark:bg-gray-900/20 text-gray-800 dark:text-gray-400",
  Thoughtfulness:
    "bg-indigo-100/50 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-400",
  Eagerness:
    "bg-pink-100/50 dark:bg-pink-900/20 text-pink-800 dark:text-pink-400",
  Confidence:
    "bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-400",
  Clarity:
    "bg-cyan-100/50 dark:bg-cyan-900/20 text-cyan-800 dark:text-cyan-400",
  Supportiveness:
    "bg-teal-100/50 dark:bg-teal-900/20 text-teal-800 dark:text-teal-400",
  Understanding:
    "bg-violet-100/50 dark:bg-violet-900/20 text-violet-800 dark:text-violet-400",
  Excitement:
    "bg-rose-100/50 dark:bg-rose-900/20 text-rose-800 dark:text-rose-400",
  Expertise:
    "bg-amber-100/50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-400",
  Satisfaction:
    "bg-lime-100/50 dark:bg-lime-900/20 text-lime-800 dark:text-lime-400",
  Empathy: "bg-sky-100/50 dark:bg-sky-900/20 text-sky-800 dark:text-sky-400",
  Compassion:
    "bg-fuchsia-100/50 dark:bg-fuchsia-900/20 text-fuchsia-800 dark:text-fuchsia-400",
  Gratitude:
    "bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300",
  Joy: "bg-green-100/50 dark:bg-green-900/20 text-green-800 dark:text-green-400",
  Love: "bg-red-100/50 dark:bg-red-900/20 text-red-700 dark:text-red-300",
  Hope: "bg-blue-100/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300",
  Relief:
    "bg-green-100/50 dark:bg-green-900/20 text-green-700 dark:text-green-300",
  Nostalgia:
    "bg-orange-100/50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300",
  Apathy:
    "bg-slate-100/50 dark:bg-slate-900/20 text-slate-800 dark:text-slate-400",
  Boredom:
    "bg-gray-100/50 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300",
  Disappointment:
    "bg-stone-100/50 dark:bg-stone-900/20 text-stone-800 dark:text-stone-400",
  Others:
    "bg-neutral-100/50 dark:bg-neutral-900/20 text-neutral-800 dark:text-neutral-400",
};

export function getEmotionColor(label: string) {
  if (!label) throw new Error("Label is required!");
  if (!(label in emotionData)) return emotionData.Others;
  return emotionData[label as EmotionLabel];
}

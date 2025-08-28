export interface Emotion {
  label: string;
  confidence: number;
}

export type Roles = "user" | "assistant";

export interface ChatMessage {
  id: string | number;
  role: Roles;
  content: string;
  emotions: Emotion[];
}

// Possible Emotions

export type EmotionLabel =
  | "Frustration"
  | "Curiosity"
  | "Determination"
  | "Helpfulness"
  | "Enthusiasm"
  | "Patience"
  | "Confusion"
  | "Thoughtfulness"
  | "Eagerness"
  | "Confidence"
  | "Clarity"
  | "Supportiveness"
  | "Understanding"
  | "Excitement"
  | "Expertise"
  | "Satisfaction"
  | "Empathy"
  | "Compassion"
  | "Gratitude"
  | "Joy"
  | "Love"
  | "Hope"
  | "Relief"
  | "Nostalgia"
  | "Apathy"
  | "Boredom"
  | "Disappointment"
  | "Others";

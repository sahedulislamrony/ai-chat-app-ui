import { ChatMessage } from "@/types/chat";

export const messages: ChatMessage[] = [
  {
    id: 1,
    role: "user",
    content:
      "Hey! I'm working on a React project and getting stuck with state management.",
    emotions: [
      { label: "Frustration", confidence: 75 },
      { label: "Curiosity", confidence: 65 },
      { label: "Determination", confidence: 58 },
    ],
  },
  {
    id: 2,
    role: "assistant",
    content:
      "I'd be happy to help! What specific issue are you facing with state management?",
    emotions: [
      { label: "Helpfulness", confidence: 92 },
      { label: "Enthusiasm", confidence: 78 },
      { label: "Patience", confidence: 85 },
    ],
  },
  {
    id: 3,
    role: "user",
    content:
      "I have a form with multiple inputs and I'm not sure if I should use useState for each field or one object.",
    emotions: [
      { label: "Confusion", confidence: 82 },
      { label: "Thoughtfulness", confidence: 70 },
      { label: "Eagerness", confidence: 63 },
    ],
  },
  {
    id: 4,
    role: "assistant",
    content:
      "Great question! For multiple related form fields, I'd recommend using a single useState with an object. It's cleaner and easier to manage. Here's a quick example:\n\n```javascript\nconst [formData, setFormData] = useState({\n  name: '',\n  email: '',\n  message: ''\n});\n```",
    emotions: [
      { label: "Confidence", confidence: 88 },
      { label: "Clarity", confidence: 91 },
      { label: "Supportiveness", confidence: 79 },
    ],
  },
  {
    id: 5,
    role: "user",
    content: "That makes sense! How do I update individual fields then?",
    emotions: [
      { label: "Understanding", confidence: 87 },
      { label: "Excitement", confidence: 72 },
      { label: "Curiosity", confidence: 89 },
    ],
  },
  {
    id: 6,
    role: "assistant",
    content:
      "You can use the spread operator to update individual fields:\n\n```javascript\nconst handleChange = (field, value) => {\n  setFormData(prev => ({\n    ...prev,\n    [field]: value\n  }));\n};\n```\n\nThis way you preserve other fields while updating just the one that changed!",
    emotions: [
      { label: "Expertise", confidence: 94 },
      { label: "Clarity", confidence: 86 },
      { label: "Satisfaction", confidence: 81 },
    ],
  },
];

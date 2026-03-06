export interface Activity {
  id: string
  title: string
  content: string
  createdAt: string
  type: string
}
export const activities: Activity[] = [
  {
    id: "act-1",
    title: "Math Homework - Quadratic Equations",
    content: "Solve exercises 1–10 on page 45 about quadratic equations.",
    createdAt: "2026-03-05",
    type: "math"
  },
  {
    id: "act-2",
    title: "English Writing Task",
    content: "Write a short essay (150–200 words) about your favorite hobby.",
    createdAt: "2026-03-05",
    type: "english"
  },
  {
    id: "act-3",
    title: "Physics Practice",
    content: "Complete problems related to Newton’s second law in the worksheet.",
    createdAt: "2026-03-05",
    type: "physics"
  },
  {
    id: "act-4",
    title: "History Reading",
    content: "Read chapter 3 about the Industrial Revolution and summarize the key points.",
    createdAt: "2026-03-05",
    type: "history"
  },
  {
    id: "act-5",
    title: "Programming Exercise",
    content: "Implement a simple calculator using JavaScript that supports +, -, *, and /.",
    createdAt: "2026-03-05",
    type: "programming"
  }
]
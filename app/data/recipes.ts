// app/data/recipes.ts
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🧆",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "Indian",
  },
  {
    id: "cold-brew-coffee",
    title: "Cold Brew Coffee",
    emoji: "☕",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast",
    emoji: "🥑",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Australian",
  },
  {
    id: "ramen-bowl",
    title: "Miso Ramen",
    emoji: "🍜",
    minutes: 45,
    difficulty: "Medium",
    cuisine: "Japanese",
  },
  {
    id: "berry-pancakes",
    title: "Berry Pancakes",
    emoji: "🥞",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "American",
  },
  {
    id: "chickpea-curry",
    title: "Chickpea Curry",
    emoji: "🍛",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Indian",
  },
  {
    id: "greek-salad",
    title: "Greek Salad",
    emoji: "🥗",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Greek",
  },
];

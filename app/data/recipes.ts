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
  { id: "margherita-pizza", title: "Margherita Pizza", emoji: "🍕",
    minutes: 35, difficulty: "Medium", cuisine: "Italian" },
    { id: "Nut-pizza", title: "Nut Pizza", emoji: "🍕",
    minutes: 35, difficulty: "Medium", cuisine: "Italian" },
    { id: "Farm-pizza", title: "Farm Pizza", emoji: "🍕",
    minutes: 35, difficulty: "Medium", cuisine: "Italian" },
    { id: "Pepperoni-pizza", title: "Pepperoni Pizza", emoji: "🍕",
    minutes: 35, difficulty: "Medium", cuisine: "Italian" },
  // ...more recipes
];
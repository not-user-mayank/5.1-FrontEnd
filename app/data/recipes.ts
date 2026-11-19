// app/data/recipes.ts
export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Fresh basil", "Olive oil"],
    steps: ["Heat the oven as hot as it goes.", "Stretch the dough and spread on tomato sauce.", "Add torn mozzarella and a drizzle of olive oil.", "Bake until the crust is golden, then finish with fresh basil."],
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🧆",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "Indian",
    ingredients: ["Paneer", "Thick yogurt", "Tikka masala", "Bell pepper", "Red onion", "Lemon"],
    steps: ["Mix yogurt, tikka masala, and lemon juice.", "Coat paneer and vegetables in the marinade.", "Thread onto skewers and grill until charred at the edges.", "Serve warm with lemon wedges."],
  },
  {
    id: "cold-brew-coffee",
    title: "Cold Brew Coffee",
    emoji: "☕",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "American",
    ingredients: ["Coarsely ground coffee", "Cold water", "Ice", "Milk or cream (optional)"],
    steps: ["Combine coffee and cold water in a jar.", "Cover and steep in the fridge for 12 to 16 hours.", "Strain through a fine filter.", "Pour over ice and add milk if you like."],
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast",
    emoji: "🥑",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "Australian",
    ingredients: ["Sourdough bread", "Ripe avocado", "Lemon juice", "Chilli flakes", "Sea salt"],
    steps: ["Toast the sourdough until crisp.", "Mash avocado with lemon juice and salt.", "Spread the avocado over the toast.", "Finish with chilli flakes and serve."],
  },
  {
    id: "ramen-bowl",
    title: "Miso Ramen",
    emoji: "🍜",
    minutes: 45,
    difficulty: "Medium",
    cuisine: "Japanese",
    ingredients: ["Ramen noodles", "Vegetable stock", "White miso", "Shiitake mushrooms", "Spring onions", "Soft-boiled egg"],
    steps: ["Simmer the stock with sliced mushrooms.", "Whisk miso with a little hot stock, then stir it into the pot.", "Cook the noodles according to the packet.", "Divide noodles and broth between bowls; top with spring onion and egg."],
  },
  {
    id: "berry-pancakes",
    title: "Berry Pancakes",
    emoji: "🥞",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "American",
    ingredients: ["Flour", "Milk", "Egg", "Baking powder", "Mixed berries", "Maple syrup"],
    steps: ["Whisk flour, milk, egg, and baking powder into a smooth batter.", "Warm a lightly greased pan over medium heat.", "Pour small rounds of batter and flip when bubbles appear.", "Serve with berries and maple syrup."],
  },
  {
    id: "chickpea-curry",
    title: "Chickpea Curry",
    emoji: "🍛",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Indian",
    ingredients: ["Chickpeas", "Chopped tomatoes", "Onion", "Garlic", "Garam masala", "Coconut milk"],
    steps: ["Soften diced onion in a pan, then add garlic and garam masala.", "Stir in tomatoes and simmer for 10 minutes.", "Add chickpeas and coconut milk; simmer until thick.", "Serve with rice or warm flatbread."],
  },
  {
    id: "greek-salad",
    title: "Greek Salad",
    emoji: "🥗",
    minutes: 20,
    difficulty: "Easy",
    cuisine: "Greek",
    ingredients: ["Cucumber", "Tomatoes", "Red onion", "Kalamata olives", "Feta", "Olive oil"],
    steps: ["Chop cucumber and tomatoes into bite-sized pieces.", "Thinly slice the red onion and add olives.", "Top with crumbled feta.", "Dress with olive oil and oregano just before serving."],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}

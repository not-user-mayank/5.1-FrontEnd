import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="card">
      <div className="card-art">{recipe.emoji}</div>
      <h3>{recipe.title}</h3>
      <div className="card-meta">
        <span>⏱ {recipe.minutes} min</span><br></br>
        <span>{recipe.difficulty}</span><br></br>
        <span>{recipe.cuisine}</span><br></br>
      </div>
    </div>
  );
}
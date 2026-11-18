import Link from "next/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="card">
      <div className="card-art" aria-hidden="true">
        {recipe.emoji}
      </div>
      <div className="card-content">
        <p className="card-category">{recipe.cuisine} cuisine</p>
        <h2>{recipe.title}</h2>
        <div className="card-meta" aria-label="Recipe details">
          <span>⏱ {recipe.minutes} min</span>
          <span className="difficulty">{recipe.difficulty}</span>
        </div>
        <span className="card-link">View recipe <span aria-hidden="true">→</span></span>
      </div>
    </Link>
  );
}

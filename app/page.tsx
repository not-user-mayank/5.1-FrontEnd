import RecipeCard from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main className="page-shell">
      <section className="intro" aria-labelledby="page-title">
        <p className="eyebrow">A little inspiration for your table</p>
        <h1 id="page-title">Find your next bite.</h1>
        <p className="intro-copy">
          Simple recipes, fresh ideas, and something delicious for every day.
        </p>
      </section>

      <section className="recipe-section" aria-labelledby="recipes-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Made for hungry people</p>
            <h2 id="recipes-title">Popular recipes</h2>
          </div>
          <p className="recipe-count">{recipes.length} recipes to explore</p>
        </div>
        <div className="grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </main>
  );
}

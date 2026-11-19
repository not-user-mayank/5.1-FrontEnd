import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id) ?? notFound();

  return (
    <main className="page-shell detail-shell">
      <Link href="/" className="back-link">← All recipes</Link>
      <article className="recipe-detail">
        <header className="detail-hero">
          <div className="detail-art" aria-hidden="true">{recipe.emoji}</div>
          <div>
            <p className="eyebrow">{recipe.cuisine} cuisine</p>
            <h1>{recipe.title}</h1>
            <p className="detail-meta">
              <span>⏱ {recipe.minutes} min</span>
              <span>{recipe.difficulty}</span>
            </p>
          </div>
        </header>

        <div className="detail-columns">
          <section className="detail-panel" aria-labelledby="ingredients-title">
            <p className="eyebrow">Get everything ready</p>
            <h2 id="ingredients-title">Ingredients</h2>
            <ul className="ingredient-list">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </section>

          <section className="detail-panel" aria-labelledby="steps-title">
            <p className="eyebrow">Let’s make it</p>
            <h2 id="steps-title">Method</h2>
            <ol className="step-list">
              {recipe.steps.map((step, index) => (
                <li key={`${recipe.id}-step-${index}`}>
                  <span className="step-number">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </article>
    </main>
  );
}

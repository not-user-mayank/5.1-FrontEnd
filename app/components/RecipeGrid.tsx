"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const visibleRecipes = recipes.filter((recipe) =>
    `${recipe.title} ${recipe.cuisine}`.toLowerCase().includes(normalizedQuery),
  );

  return (
    <div className="recipe-browser">
      <label className="search-box">
        <span aria-hidden="true">⌕</span>
        <span className="sr-only">Search recipes by name or cuisine</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search recipes or cuisines…"
          autoComplete="off"
        />
      </label>

      <p className="search-status" aria-live="polite">
        Showing {visibleRecipes.length} of {recipes.length} recipes
      </p>

      {visibleRecipes.length === 0 ? (
        <p className="empty-state" role="status">
          No recipes match “{query}”. Try another search.
        </p>
      ) : (
        <div className="grid">
          {visibleRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

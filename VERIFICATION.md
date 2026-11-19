# NextBites Part 3 verification

## Production build

Command: `npm run build`  
Result: exit code 0. Next.js generated the static home page, the not-found page, and all eight recipe detail pages in `out/` using `generateStaticParams`.

The checked output includes:

- `out/index.html`
- `out/recipe/margherita-pizza/index.html`
- `out/recipe/paneer-tikka/index.html`
- `out/recipe/cold-brew-coffee/index.html`
- `out/recipe/avocado-toast/index.html`
- `out/recipe/ramen-bowl/index.html`
- `out/recipe/berry-pancakes/index.html`
- `out/recipe/chickpea-curry/index.html`
- `out/recipe/greek-salad/index.html`

## Public site checks

Both pages were opened in a browser and their content rendered:

- [Home page](https://not-user-mayank.github.io/5.1-FrontEnd/): title “NextBites | Simple recipes for every day,” heading “Find your next bite,” and all eight recipes.
- [Margherita Pizza detail page](https://not-user-mayank.github.io/5.1-FrontEnd/recipe/margherita-pizza/): recipe title, ingredients, and method rendered.

The GitHub Actions PR workflow now also runs `curl --fail` against both live URLs and checks for the expected page content. The successful deployment is [run 44575312643](https://github.com/not-user-mayank/5.1-FrontEnd/actions/runs/44575312643).

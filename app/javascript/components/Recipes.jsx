import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Recipes = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const url = "/api/v1/recipes/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setRecipes(res))
      .catch(() => navigate("/"));
  }, []);

  const allRecipes = recipes.map((recipe, index) => (
    <div key={index} className="">
      <div className="border mb-4">
        <img
          src={recipe.image}
          className=""
          alt={`${recipe.name} image`}
        />
        <div className="">
          <h5 className="">{recipe.name}</h5>
          <Link to={`/recipe/${recipe.id}`} className="">
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  ));
  const noRecipe = (
    <div className="flexitems-center justify-center">
      <h4>
        No recipes yet. Why not <Link to="/new_recipe">create one</Link>
      </h4>
    </div>
  );


  return (
    <>
      <section className="text-center">
        <div className="py-5">
          <h1 className="">Recipes for every occasion</h1>
          <p className="">
            We’ve pulled together our most popular recipes, our latest
            additions, and our editor’s picks, so there’s sure to be something
            tempting for you to try.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="">
          <div className="text-end mb-3">
            <Link to="/recipe" className="">
              Create New Recipe
            </Link>
          </div>
          <div className="">
            {recipes.length > 0 ? allRecipes : noRecipe}
          </div>
          <Link to="/" className="">
            Home
          </Link>
        </main>
      </div>
    </>
  );

};

export default Recipes;
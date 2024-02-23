import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Recipe = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({ ingredients: "" });

  useEffect(() => {
    const url = `/api/v1/recipes/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setRecipe(response))
      .catch(() => navigate("/recipes"));
  }, [params.id]);

  const ingredientList = () => {
    let ingredientList = "No ingredients available";

    if (recipe.ingredients.length > 0) {
      ingredientList = recipe.ingredients
        .split(",")
        .map((ingredient, index) => (
          <li key={index} className="list-group-item">
            {ingredient}
          </li>
        ));
    }

    return ingredientList;
  };

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <img
          src={recipe.image}
          alt={`${recipe.name} image`}
          className=""
        />
        <div className="" />
        <h1 className="">
          {recipe.name}
        </h1>
      </div>
      <div className=" py-5">
        <div className="">
          <div className="">
            <ul className="">
              <h5 className="mb-2">Ingredients</h5>
              {ingredientList()}
            </ul>
          </div>
          <div className="">
            <h5 className="mb-2">Preparation Instructions</h5>
            <div
              
            >{recipe.instruction}</div>
          </div>
          <div className="col-sm-12 col-lg-2">
            <button
              type="button"
              className=""
            >
              Delete Recipe
            </button>
          </div>
        </div>
        <Link to="/recipes" className="">
          Back to recipes
        </Link>
      </div>
    </div>
  );

};

export default Recipe;
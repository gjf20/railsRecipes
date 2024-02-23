import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 text-blue-400 items-center justify-content-center">
    <div className="bg-opacity-0">
      <div className="">
        <h1 className="">Food Recipes</h1>
        <p className="">
          A curated list of recipes for the best homemade meal and delicacies.
        </p>
        <hr className="my-4" />
        <Link
          to="/recipes"
          className=""
          role="button"
        >
          View Recipes
        </Link>
      </div>
    </div>
  </div>
);
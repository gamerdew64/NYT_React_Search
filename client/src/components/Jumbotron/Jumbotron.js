import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron jumbotron-dark bg-danger text-center">
    <h1>React Recipes</h1>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="http://www.recipepuppy.com/about/api/"
    >
      Powered by Recipe Puppy
    </a>
  </div>
);

export default Jumbotron;

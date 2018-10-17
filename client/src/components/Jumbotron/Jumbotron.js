import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron jumbotron-dark bg-danger text-center">
    <h1>New York Times Article Scrubber</h1>
    <h4>Search for and annotate articles of interest!</h4>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://developer.nytimes.com/"
    >
      Powered by The New York Times API
    </a>
  </div>
);

export default Jumbotron;

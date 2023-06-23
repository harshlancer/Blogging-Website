// Articles.js

import React from "react";
import "./Articles.css";

function Articles({ isNightMode }) {
  const articles = [
    {
      id: 1,
      title: "Getting Started with React",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "React Hooks Tutorial",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 3,
      title: "Advanced React Techniques",
      content: "Aenean commodo ligula eget dolor. Aenean massa.",
    },
  ];

  return (
    <div className={`articles ${isNightMode ? "night-mode" : ""}`}>
      <h2>Articles</h2>
      {articles.map((article) => (
        <div key={article.id} className="article">
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Articles;

// News.js

import { useEffect } from "react";
import React from "react";
import "./News.css";

function News({ isNightMode }) {
    const newsItems = [
      {
        id: 1,
        title: "Breaking News 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        title: "Breaking News 2",
        description:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      },
      {
        id: 3,
        title: "Breaking News 3",
        description: "Aenean commodo ligula eget dolor. Aenean massa.",
      },
    ];
 
  return (
    <div className={`news ${isNightMode ? "night-mode" : ""}`}>
      <h2>News</h2>
      {newsItems.map((item) => (
        <div key={item.id} className="news-item">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default News;

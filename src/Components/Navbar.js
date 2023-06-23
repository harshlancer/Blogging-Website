// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isNightMode }) {
  const categories = [
    { name: "Trending Stock", slug: "trend" },
    { name: "Top Gainers", slug: "top" },
  ];
  return (
    <nav className={`navbar ${isNightMode ? "night-mode" : ""}`}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Articles
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/news" className="nav-link">
            News
          </Link>
        </li>
        
          <div className="categories">
          {categories.map((item) => (
            <a href={`/categories/${item.slug}`} key={item.slug}>
              <span className="link">{item.name}</span>
            </a>
          ))}
          </div>
      </ul>
    </nav>
  );
}

export default Navbar;

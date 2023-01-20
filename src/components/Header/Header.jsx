import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <span className="header-logo">RBlogs</span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create post</Link>
          </li>
          <li>Read Blogs</li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

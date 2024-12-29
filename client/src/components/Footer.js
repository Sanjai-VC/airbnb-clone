import React from "react";
import "./styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">
          <img
            src="https://www.1min30.com/wp-content/uploads/2018/02/Couleur-logo-Airbnb.jpg"
            alt="Airbnb Logo"
          />
        </a>
      </div>
      <div className="header-search">
        <input
          type="text"
          placeholder="Search destinations, properties..."
        />
        <button className="search-button">Search</button>
      </div>
      <div className="header-menu">
        <a href="/register">Sign Up</a>
        <a href="/login">Log In</a>
      </div>
    </header>
  );
};

export default Header;

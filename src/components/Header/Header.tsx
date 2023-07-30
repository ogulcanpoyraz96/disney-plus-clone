import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav className="header-container">
        <img
          className="header-logo"
          src="https://prod-static.disney-plus.net/us-west-2/builds/e76798ab2a732a884562763cbd19b969a80dcd5b_1606148151180/images/logo.svg"
          alt="disney-logo"
        />
        <div className="header-menu">
          <Link to="/home" className="header-menu-link">
            <img src="images/home-icon.svg" alt="home-icon" />
            <span>home</span>
          </Link>
          <Link to="/search" className="header-menu-link">
            <img src="images/search-icon.svg" alt="search-icon" />
            <span>search</span>
          </Link>
          <Link to="/watchlist" className="header-menu-link">
            <img src="/images/watchlist-icon.svg" alt="" />
            <span>watchlist</span>
          </Link>
          <Link to="/originals" className="header-menu-link">
            <img src="images/original-icon.svg" alt="originals-icon" />
            <span>originals</span>
          </Link>
          <Link to="/movies" className="header-menu-link">
            <img src="images/movie-icon.svg" alt="movie-icon" />
            <span>movies</span>
          </Link>
          <Link to="/series" className="header-menu-link">
            <img src="images/series-icon.svg" alt="series-icon" />
            <span>series</span>
          </Link>
        </div>

        <div className="header-user-image-container">
          <img
            className="header-user-image"
            src="https://pbs.twimg.com/profile_images/540318636976513024/YuTBjf8S_400x400.jpeg"
          />
        </div>
      </nav>
    </div>
  );
}

export default Header;

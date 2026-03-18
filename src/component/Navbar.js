import React from "react";
import "./navbar.css";
import ReactStars from 'react-stars'
import { Link } from "react-router-dom";

function Navbar({settext, setrate}) {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">LIROLIRO</div>

<ul className="navbar__links">
  <li>
    <Link to="/" className="navbar__link navbar__link--active" style={{ textDecoration: "none", color: "white" }}>
      Home
    </Link>
  </li>
  <li>
    <Link to="/movies" className="navbar__link">Movies</Link>
  </li>
  <li>
    <Link to="/tv" className="navbar__link">TV Shows</Link>
  </li>
  <li>
    <Link to="/anime" className="navbar__link">Anime</Link>
  </li>
  <li>
   <Link to="/new" className="navbar__link">New & Popular</Link>
  </li>
</ul>
      </div>

      <div className="navbar__right">
                  <ReactStars
  count={5}
  size={24}
  color2={'#ffd700'} 
  onChange={(newRating)=>setrate(newRating)}
  />
        <div className="navbar__search">

          <svg className="search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input type="search" placeholder="Search movies..." className="search__input"  onChange={(e)=>settext(e.target.value)}/>
        </div>

        <div className="navbar__bell">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="bell__dot" />
        </div>

        <button className="navbar__profile">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>Profile</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
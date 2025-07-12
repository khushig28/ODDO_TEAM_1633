import React from "react";
import "./Navbar.css";

function Navbar({ user, points }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">ClothesExchange</div>
      <div className="navbar-right">
        <button className="nav-btn">Sell</button>
        <button className="nav-btn">Buy</button>
        <div className="nav-points">Points: {points}</div>
        <div className="nav-user">{user.name}</div>
      </div>
    </nav>
  );
}

export default Navbar;

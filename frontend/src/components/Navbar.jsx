import React from "react";
import "./Navbar.css";

function Navbar({ user = { name: "Guest" }, points = 0 }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">SWAP-IT</div>
      <div className="navbar-right">
        <button className="nav-btn">Sell</button>
        <button className="nav-btn">Buy</button>
        <div className="nav-points">{points = 0 }🪙</div>
        <div className="nav-user">👤 {user.name}</div>
      </div>
    </nav>
  );
}

export default Navbar;

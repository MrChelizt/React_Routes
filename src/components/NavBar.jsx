import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import Logo from "../screenshots/watermelon.png";

export default function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <img src={Logo} alt="watermelon" />
      </Link>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/products">
        <div>Products</div>
      </Link>
    </div>
  );
}

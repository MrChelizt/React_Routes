import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <h1>Hello summer !!!</h1>
        <Link to="/products">
          <button>Check out the products here</button>
        </Link>
      </div>
    </div>
  );
}

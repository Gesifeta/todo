import React, { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "../menu/Menu.jsx";
import "./Header.css";

const Header = () => {
  // to get the breakpoints
  let triggerPoint = window.innerWidth;
  // to show or hide navigation bar
  const [showNav, setShowNav] = useState(triggerPoint);
  // to change the breakpoints
  window.addEventListener("resize", () => {
    triggerPoint = window.innerWidth;
    if (triggerPoint > 600) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  });
  return (
    <header>
      <div className="container-logo">
        <div className="logo">
          <img src="/todo-logo.jpg" alt="logo" width={40} />
        </div>
        <Menu showNav={showNav} setShowNav={setShowNav} />
      </div>

      {showNav ? (
        <nav className="nav-header">
          <ul>
            {["About", "Service", "Pricing", "Support"].map((nav, index) => (
              <li key={`${nav}-${index}`}>{nav}</li>
            ))}
          </ul>
          <div className="access">
            <div className="btn-group">
              <button className="btn btn-signup">
                <a href="/user/new">Sign Up</a>
              </button>

              <button className="btn btn-login">
                <a href="/user/login">Login</a>
              </button>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;

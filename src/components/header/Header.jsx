import React, { useState, useEffect } from "react";

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
      setShowNav(false);  console.log("clicked");
    }
  });
  // remove navigation bar when child element clicked
  useEffect(() => {
    let navigations = document.querySelectorAll(".nav");
    navigations?.forEach((navigation) => {
      navigation?.addEventListener("click", () => {
        setShowNav(false);
      
      });
    });
  }, [showNav]);
 
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
              <li className="nav" key={`${nav}-${index}`}>
                {nav}
              </li>
            ))}
          </ul>
          <div className="access">
            <div className="btn-group">
              <a href="/user/new">
                <button className="btn btn-signup">Sign Up</button>
              </a>
              <a href="/user/login">
                <button className="btn btn-login">Login</button>
              </a>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;

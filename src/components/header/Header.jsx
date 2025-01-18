import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">Logo</div>
      <div className="menu">
        <span className="line-upper">-</span>
        <span className="line-middle">-</span>
        <span className="line-lower">-</span>
      </div>
      <nav className="nav-header">
        <ul>
          {["About", "Service", "Pricing", "Support"].map((nav, index) => (
            <li key={`${nav}-${index}`}>{nav}</li>
          ))}
        </ul>
        <div className="access">
          <button className="btn btn-signup">Sign Up</button>
          <button className="btn btn-login">Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

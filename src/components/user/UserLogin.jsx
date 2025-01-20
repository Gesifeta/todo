import React from "react";
import { useNavigate } from "react-router-dom";

import "./User.css";
const UserLogin = () => {
  let navigate = useNavigate();
  return (
    <section className="user">
      {/* Login form */}
      <div className="user-login">
        <h1 className="user__title">Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">User name</label>
            <input type="email" id="email" placeholder="user name" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="password" />
          </div>
          <p>
            You don't have arleady an Account?{" "}
            <a href="/user/new" style={{ color: "lightBlue" }}>
              Register Here
            </a>
          </p>
          <div className="btn-group">
            <button
              className="btn-primary"
              onClick={() => navigate("/user/login")}
            >
              Login
            </button>
            <button className="btn-secondary" onClick={() => navigate("/")}>
              Cancel
            </button>
          </div>
        </form>
        {/* GOOGLE LOGIN METHOD*/}
      </div>
    </section>
  );
};

export default UserLogin;

import React from "react";
import "./User.css";

const UserRegister = () => {
  return (
    <section className="user">
      <div className="user-register">
        <h1>Register</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
            />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn-primary">
              Register
            </button>
            <button type="button" className="btn-secondary" onClick={()=>window.location.pathname="/"}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UserRegister;

import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="sidebar-left">
        <h3>Activities</h3>
        <ul>
          {["Progress", "Completed", "Inprogress", "Note Started"].map(
            (activity, index) => (
              <li key={`${activity}-${index}`}>{activity}</li>
            )
          )}
        </ul>
      </div>
      <div className="search-bar">
        <input type="search" name="search" id="search" />
      </div>
      <div className="task-area">
        <h1>Task area</h1>
      </div>
      <div className="sidebar-right">
        <h3>Up-comming tasks</h3>
        {["Progress", "Completed", "Inprogress", "Note Started"].map(
          (activity, index) => (
            <li key={`${activity}-${index}`}>{activity}</li>
          )
        )}
      </div>
      <div className="task-upcoming">
        <h2>Up comming tasks</h2>
      </div>
    </section>
  );
};

export default Home;

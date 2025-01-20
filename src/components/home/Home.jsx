import React, { useEffect, useState } from "react";
import {
  Activity,
  CircleCheck,
  CircleDashed,
  ListStart,
  ListTodo,
  Loader,
  MonitorCheck,
  Search,
} from "lucide-react";

import { users, tasks, progresses } from "../../data/data.js";
import "./Home.css";

const Home = () => {
  const [todayTasks, setTodayTasks] = useState([]);
  const [upComingTasks, setUpComingTasks] = useState([]);
  const [progressTasks, setProgressTasks] = useState([]);

  useEffect(() => {
    // Filter todays task
    const today = new Date().getDay();
    const todayTasks = tasks.filter((task) => task.dayNumber === today);
    setTodayTasks(todayTasks);
    // Filter upcoming tasks for the week

    const upcomingTasks = tasks.filter((task) => task.dayNumber > today);
  }, []);
  return (
    <section className="home">
      <div className="sidebar-left">
        <div className="nav-list">
          <h3>TASKS</h3>
          <span className="nav-icon">
            <ListTodo color="var(--color-accent)" />
          </span>
        </div>
        <ul>
          <li className="nav-list">
            <span className="nav-icon">
              <CircleCheck color="var(--success-color)" />
            </span>
            <span className="nav-icon">Completed</span>
          </li>
          <li className="nav-list">
            <span className="nav-icon">
              <Loader color="blue" />
            </span>
            <span className="nav-icon">Inprogress</span>
          </li>
          <li className="nav-list">
            <span className="nav-icon">
              <ListStart color="blue" />
            </span>
            <span className="nav-icon">Not Started</span>
          </li>
          <li className="nav-list">
            <span className="nav-icon">
              <Activity color="blue" />
            </span>
            <span className="nav-icon">Progress</span>
          </li>
        </ul>
      </div>
      <div className="search-bar">
        <Search className="search-icon" />
        <input type="search" name="search" id="search" placeholder="Search" />
      </div>
      <div className="task-area">
        <h3>Today's Tasks</h3>
        <div className="task-list">
          {todayTasks.map((task, index) => (
            <div className="task" key={`${task._id}-${index}`}>
              <div className="task-status">
                <span className="task-icon">
                  <CircleDashed color="var(--color-accent)" />
                </span>
                <span className="task-icon">
                  <MonitorCheck color="var(--success-color)" />
                </span>
              </div>
              <h4>{task.description}</h4>
              <div className="task-detail">
                <ul>
                  {task.activities.map((subTask, index) => (
                    <li key={`${subTask.taskId}-${index}`}>
                      {subTask.description}
                      {subTask.status === "completed" ? (
                        <CircleCheck color="var(--success-color)" />
                      ) : (
                        <CircleDashed color="var(--color-accent)" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
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
        <h2>Up coming tasks</h2>
      </div>
    </section>
  );
};

export default Home;

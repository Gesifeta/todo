import React, { useEffect, useState } from "react";
import {
  Activity,
  Circle,
  CircleCheck,
  CircleCheckBig,
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
  const [taskComplete,setTaskComplete]=useState(false)
  const [day,setDay]=useState("")
  const [todayTasks, setTodayTasks] = useState([]);
  const [upComingTasks, setUpComingTasks] = useState([]);
  const [progressTasks, setProgressTasks] = useState([]);

  useEffect(() => {
    // Filter todays task
    const today = new Date().getDay();
    const todayTasks = tasks.filter((task) => task.dayNumber === today);
    setTodayTasks(todayTasks);
    // Filter upcoming tasks for the week

    const comingTasks = tasks.filter(
      (task) => today < task.dayNumber && task.dayNumber < today + 7
    );
    setUpComingTasks(comingTasks);
   setDay(today)
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
               {taskComplete?
                <span className="task-icon">
                  <Circle color="var(--color-accent)" onClick={()=>setTaskComplete(!taskComplete)} />
                </span>: <span className="task-icon">
                  <CircleCheckBig color="var(--success-color)" onClick={()=>setTaskComplete(!taskComplete)}  />
                </span>}
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
        <div className="nav-list">
          <h3>PROGRESS</h3>
          <span className="nav-icon">
            <MonitorCheck color="var(--success-color)" />
          </span>
     
        </div>
       <div className="container-day">
        <span>Day</span>
      <span className="task-day"> {day}</span>
     </div>
        <h3>Up-comming Tasks</h3>
        {["Progress", "Completed", "Inprogress", "Note Started"].map(
          (activity, index) => (
            <li key={`${activity}-${index}`}>{activity}</li>
          )
        )}
      </div>
      <div className="task-upcoming">
        <h2>Up coming Activities</h2>
        <div className="task-list">
          {upComingTasks.map((task, index) => (
            <div className="task" key={`${task._id}-${index}`}>
              <div className="task-status">
                <span className="task-icon">
                 Day {task.dayNumber}
                </span>
              </div>
              <h4>{task.description}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

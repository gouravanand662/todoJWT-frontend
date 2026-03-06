import React, { useEffect, useState } from "react";
import API from "../api/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await API.get("/tasks");

    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    await API.post("/tasks", {
      title,
      description: "",
      completed: false,
    });

    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);

    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");

    window.location.reload();
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={logout}>Logout</button>

      <input
        placeholder="new task"
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}

            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;

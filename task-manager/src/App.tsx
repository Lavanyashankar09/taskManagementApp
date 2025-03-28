import React, { useState, useEffect } from "react";
import axios from "axios";

interface Task {
  id: string;
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<Task>({ id: "", title: "", description: "" });

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get("/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async () => {
    if (!task.title || !task.description) {
      console.error("Title and Description are required");
      return;
    }
    try {
      await axios.post("/api/tasks", task);
      fetchTasks();
      setTask({ id: "", title: "", description: "" });  // Reset after task creation
    } catch (error) {
      console.error("Error creating task", error);
    }
  };

  const updateTask = async (id: string) => {
    if (!task.title || !task.description) {
      console.error("Title and Description are required for updating");
      return;
    }
    try {
      await axios.put(`/api/tasks/${id}`, task);
      fetchTasks();
      setTask({ id: "", title: "", description: "" });  // Reset after update
    } catch (error) {
      console.error("Error updating task", error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  return (
    <div>
      <h1>Task Management System</h1>
      <div>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          placeholder="Task Title"
        />
        <input
          type="text"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          placeholder="Task Description"
        />
        <button onClick={task.id ? () => updateTask(task.id) : createTask}>
          {task.id ? "Update Task" : "Create Task"}
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}: {task.description}
            <button onClick={() => setTask(task)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

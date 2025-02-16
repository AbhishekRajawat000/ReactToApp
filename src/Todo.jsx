import React, { useState } from 'react';
import './App.css';
import { 
  Trash2, 
  CheckCircle, 
  Circle, 
  Plus 
} from 'lucide-react';

export default function Todo() {
  const [tasks, setTasks] = useState([
    { task: "Sample Task", id: crypto.randomUUID(), isDone: false }
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTask = () => {
    if (newTodo.trim() === "") return;
    setTasks(prevTasks => [
      { task: newTodo.trim(), id: crypto.randomUUID(), isDone: false },
      ...prevTasks
    ]);
    setNewTodo("");
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const toggleTaskStatus = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const toggleAllTasks = () => {
    const areAllDone = tasks.every(task => task.isDone);
    setTasks(prevTasks =>
      prevTasks.map(task => ({ ...task, isDone: !areAllDone }))
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const activeTasks = tasks.filter(task => !task.isDone).length;
  const completedTasks = tasks.filter(task => task.isDone).length;

  return (
    <div className="todo-container">
      <header className="todo-header">
        <h1>Todo List</h1>
      </header>

      <div className="input-group">
        <input
          className="todo-input"
          placeholder="What needs to be done?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className="btn btn-primary" onClick={addTask}>
          <Plus size={18} />
          Add Task
        </button>
      </div>

      <ul className="todo-list">
        {tasks.map(task => (
          <li key={task.id} className="todo-item">
            <button 
              className="icon-button"
              onClick={() => toggleTaskStatus(task.id)}
            >
              {task.isDone ? (
                <CheckCircle size={20} />
              ) : (
                <Circle size={20} />
              )}
            </button>
            <span className={`todo-text ${task.isDone ? 'completed' : ''}`}>
              {task.task}
            </span>
            <button 
              className="icon-button delete"
              onClick={() => deleteTask(task.id)}
            >
              <Trash2 size={18} />
            </button>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <div className="todo-footer">
          <div className="todo-stats">
            {activeTasks} active, {completedTasks} completed
          </div>
          <button className="btn btn-ghost" onClick={toggleAllTasks}>
            Toggle All
          </button>
        </div>
      )}
    </div>
  );
}
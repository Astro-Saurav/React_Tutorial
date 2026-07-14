import React, { useState } from 'react';
import { Check, Trash2, Plus } from 'lucide-react';

export default function InteractiveTodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React basics', completed: true },
    { id: 2, text: 'Build a To-Do List', completed: false },
    { id: 3, text: 'Master state management', completed: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-app glass-panel animate-slide-in">
      <div className="todo-header">
        <h3>My Tasks</h3>
      </div>
      
      <form onSubmit={addTask} className="todo-input-container">
        <input
          type="text"
          className="todo-input"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btn btn-primary" title="Add Task">
          <Plus size={20} />
        </button>
      </form>

      <ul className="todo-list">
        {tasks.map(task => (
          <li key={task.id} className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <div className="todo-content" onClick={() => toggleTask(task.id)}>
              <div className="todo-checkbox">
                {task.completed && <Check size={14} color="white" />}
              </div>
              <span className="todo-text">{task.text}</span>
            </div>
            <button 
              className="todo-delete" 
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(task.id);
              }}
              title="Delete Task"
            >
              <Trash2 size={18} />
            </button>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && (
        <p style={{textAlign: 'center', marginTop: '2rem', color: 'var(--text-secondary)'}}>
          All caught up! Add a new task above.
        </p>
      )}
    </div>
  );
}

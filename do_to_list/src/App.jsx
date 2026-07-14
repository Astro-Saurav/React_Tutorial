import React from 'react';
import InteractiveTodoList from './components/InteractiveTodoList';
import TutorialStep from './components/TutorialStep';

function App() {
  return (
    <div className="app-container">
      <header className="hero">
        <h1>React To-Do List Tutorial</h1>
        <p>
          Welcome, beginner! Let's build a functional and beautiful To-Do List step-by-step. 
          If you follow these instructions, you will have a working, professional-looking app!
        </p>
      </header>

      <main>
        <TutorialStep 
          title="Step 1: Set Up Your Project"
          description="First, open your terminal (command prompt) and run these exact commands. This will create a new folder called 'my-todo-app', download React, and start a local web server."
          code={`npx create-vite@latest my-todo-app --template react
cd my-todo-app
npm install
npm run dev`}
        >
          <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '0.5rem' }}>
            <h4 style={{ marginTop: 0, marginBottom: '1rem', color: '#3b82f6' }}>What do these commands do?</h4>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#cbd5e1' }}>
              <li><strong>npx create-vite...</strong>: Uses Vite to instantly generate a pre-configured React project folder named "my-todo-app".</li>
              <li><strong>cd my-todo-app</strong>: "Change Directory" - Moves your terminal into your newly created project folder.</li>
              <li><strong>npm install</strong>: Reads your project requirements and downloads all the necessary behind-the-scenes code (like React itself).</li>
              <li><strong>npm run dev</strong>: Starts a local development web server on your computer so you can instantly preview your website as you type code!</li>
            </ul>
          </div>
        </TutorialStep>

        <TutorialStep 
          title="Step 2: Clean Up Files"
          description="Your project comes with some default files. Open your code editor (like VS Code). Go into the 'src' folder and delete everything inside 'App.css' and 'App.jsx'. We are going to write our own beautiful code from scratch!"
        />

        <TutorialStep 
          title="Step 3: Add Professional Styling (CSS)"
          description="A great app needs a great design! Open 'src/App.css', copy the CSS code below, and paste it in. This gives our app a modern 'glass' effect, smooth animations, and a professional dark mode layout."
          code={`/* src/App.css */
body {
  background-color: #0f172a;
  color: #f8fafc;
  font-family: 'Inter', sans-serif;
  margin: 0;
}

#root {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
}

.todo-app {
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
}

.title {
  text-align: center;
  margin-top: 0;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.input-container {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.todo-input {
  flex: 1;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;
  outline: none;
}

.todo-input:focus {
  border-color: #3b82f6;
}

.btn-add {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-add:hover {
  opacity: 0.9;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: rgba(15, 23, 42, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
}

.btn-delete {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-delete:hover {
  background: rgba(239, 68, 68, 0.2);
}`}
        >
          <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '0.5rem' }}>
            <h4 style={{ marginTop: 0, marginBottom: '1rem', color: '#3b82f6' }}>CSS Code Breakdown:</h4>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#cbd5e1' }}>
              <li><strong>body:</strong> Sets the background color of the entire web page to a very dark blue and makes the text white.</li>
              <li><strong>#root & flexbox:</strong> `display: flex`, `justify-content: center`, and `align-items: center` act like a magnet, pulling our To-Do list container perfectly into the center of the screen.</li>
              <li><strong>.todo-app & glassmorphism:</strong> We use a semi-transparent background color combined with `backdrop-filter: blur(12px)` to create a frosted glass effect that looks incredibly premium!</li>
              <li><strong>.title & gradients:</strong> Instead of a solid color, we use `linear-gradient` and `-webkit-background-clip: text` to color our text with a smooth transition from blue to purple.</li>
            </ul>
          </div>
        </TutorialStep>

        <TutorialStep 
          title="Step 4: Write the React Code"
          description="Now, open your empty 'src/App.jsx' file. Copy the complete code below and paste it in. This code uses the beautiful CSS classes we just added, and includes the React logic to add and delete tasks!"
          code={`import { useState } from 'react';
import './App.css'; // Import our beautiful styles!

function App() {
  // 1. Create a state variable to hold our tasks
  const [tasks, setTasks] = useState([]);
  
  // 2. Create a state variable for what the user types in the input box
  const [inputValue, setInputValue] = useState('');

  // 3. Function to add a new task
  const addTask = (e) => {
    e.preventDefault(); // Stop the page from refreshing
    if (inputValue.trim() === '') return; // Don't add empty tasks
    
    // Create a new task object
    const newTask = {
      id: Date.now(), // Generate a unique ID based on the current time
      text: inputValue, // The text the user typed
    };
    
    // Update the list of tasks: 
    // ...tasks means "keep all the old tasks", and we add newTask at the end
    setTasks([...tasks, newTask]);
    
    // Clear the input box so it's empty for the next task
    setInputValue(''); 
  };

  // 4. Function to delete a task
  const deleteTask = (idToRemove) => {
    // Filter keeps every task EXCEPT the one where the ID matches
    setTasks(tasks.filter(task => task.id !== idToRemove));
  };

  return (
    <div className="todo-app">
      <h2 className="title">My To-Do List</h2>
      
      {/* Input Form */}
      <form onSubmit={addTask} className="input-container">
        <input 
          className="todo-input"
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="What needs to be done?"
        />
        <button type="submit" className="btn-add">Add</button>
      </form>

      {/* List of Tasks */}
      <ul className="todo-list">
        {/* .map() loops over our array of tasks and creates an HTML list item (<li>) for each one */}
        {tasks.map((task) => (
          <li key={task.id} className="todo-item">
            <span>{task.text}</span>
            <button className="btn-delete" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      {/* If we have 0 tasks, display this friendly message! */}
      {tasks.length === 0 && (
        <p style={{ textAlign: 'center', color: '#94a3b8', marginTop: '1rem' }}>
          All caught up! Add a task above.
        </p>
      )}
    </div>
  );
}

export default App;`}
        >
          <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '0.5rem' }}>
            <h4 style={{ marginTop: 0, marginBottom: '1rem', color: '#3b82f6' }}>React Code Breakdown:</h4>
            <ul style={{ paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#cbd5e1' }}>
              <li><strong>import {`{ useState }`} from 'react':</strong> <code>useState</code> is React's "memory". We use it to remember data that might change. Whenever this data changes, React automatically redraws our screen!</li>
              <li><strong>const [tasks, setTasks] = useState([]):</strong> This line creates a memory vault. <code>tasks</code> is the current list of tasks (starting as an empty array <code>[]</code>). <code>setTasks</code> is the special remote control function we use to update the list.</li>
              <li><strong>const addTask:</strong> When the user submits the form, we prevent the page from reloading. We create a new task object with the text they typed and a unique ID (the current time). We then use <code>setTasks([...tasks, newTask])</code> to copy the existing list and add the new one!</li>
              <li><strong>const deleteTask:</strong> When a user clicks delete, we use the Javascript <code>.filter()</code> method. It loops through all tasks and keeps only the ones whose ID does NOT match the one we want to delete.</li>
              <li><strong>{`{tasks.map((task) => ...)}`} :</strong> In React, if we want to turn an array of data into HTML, we use <code>.map()</code>. It loops over our list of tasks and spits out a <code>&lt;li&gt;</code> element for every single task!</li>
            </ul>
          </div>
        </TutorialStep>

        <TutorialStep 
          title="Step 5: See It In Action!"
          description="Save both files. Because 'npm run dev' is running, your browser should automatically update. You will now have a beautiful, professional To-Do list that looks just like this:"
        >
          <InteractiveTodoList />
        </TutorialStep>
      </main>
      
      <footer style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-secondary)' }}>
        <p>Built with ❤️ using React and Vite</p>
      </footer>
    </div>
  );
}

export default App;

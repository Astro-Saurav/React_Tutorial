---
title: React Basics
description: Understand the fundamental building blocks of React applications.
difficulty: Beginner
readingTime: 5 min
chapter: 2
lesson: 1
tags:
  - React
  - JSX
next: react-basics/components
previous: getting-started/installation
---

# React Basics

Now that your environment is set up, it's time to dive into the core concepts of React. At the heart of React is **JSX**, a syntax extension for JavaScript.

## Lesson Objective
Learn how JSX works, why React uses it, and how it translates to standard JavaScript in the browser.

## Theory
### What is JSX?
JSX stands for JavaScript XML. It allows us to write HTML-like syntax directly inside our JavaScript files. This makes writing React components much more intuitive because the visual structure of the component lives right next to its logic.

> [!info]
> Browsers don't understand JSX. Under the hood, build tools like Vite use Babel or SWC to compile JSX down to standard `React.createElement()` calls before sending it to the browser.

## Simple Explanation
Think of JSX as a templating language that has the full power of JavaScript. You can write HTML tags, and whenever you need to use JavaScript variables or functions, you just wrap them in curly braces `{}`.

## Code
Let's look at a simple example of rendering a greeting.

```jsx
// src/components/Greeting.jsx
import React from 'react';

export default function Greeting() {
  const name = "Developer";
  const unreadMessages = 3;

  return (
    <div className="p-4 bg-slate-100 rounded-lg">
      <h1 className="text-2xl font-bold">Hello, {name}!</h1>
      
      {unreadMessages > 0 && (
        <p className="text-blue-600 mt-2">
          You have {unreadMessages} unread messages.
        </p>
      )}
    </div>
  );
}
```

### Line-by-Line Explanation
1. `export default function Greeting() {` - We declare a standard JavaScript function. In React, functions that return JSX are called **Components**.
2. `const name = "Developer";` - A standard JavaScript variable.
3. `return (` - We return the JSX. Note the parenthesis; they allow us to write multi-line JSX safely without JavaScript's automatic semicolon insertion breaking our code.
4. `className="p-4 bg-slate-100..."` - Notice we use `className` instead of `class`. This is because `class` is a reserved keyword in JavaScript.
5. `{name}` - We use curly braces to inject the JavaScript variable directly into the HTML output.
6. `{unreadMessages > 0 && (...)}` - This is conditional rendering. If `unreadMessages` is greater than 0, the paragraph tag is rendered.

## Common Errors
> [!warning]
> **Returning Multiple Elements:** A React component can only return **one single parent element**. If you try to return two sibling elements without wrapping them in a `<div>` or a `<>` (Fragment), React will throw a syntax error.

## Quiz
**Question:** Which of the following is the correct way to add a CSS class to a JSX element?
- A) `<div class="container">`
- B) `<div className="container">`
- C) `<div style="container">`

*(Answer: B)*

## Summary
JSX bridges the gap between markup and logic, allowing developers to create highly cohesive and declarative user interfaces. 

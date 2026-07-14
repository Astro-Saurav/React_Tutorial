---
title: Installation
description: Learn how to set up your React development environment.
difficulty: Beginner
readingTime: 5 min
chapter: 1
lesson: 1
tags:
  - React
  - Setup
next: react-basics
previous: index
---

# Installation

Welcome to the **React Shoe Store Course**! In this lesson, we will set up our development environment.

## Lesson Objective
By the end of this lesson, you will have Node.js installed and a new Vite project running locally.

## Theory
React is a JavaScript library for building user interfaces. To use it effectively, we need a local development server and build tools. We will use **Vite**, a modern and fast frontend build tool.

> [!tip]
> Vite is significantly faster than Create React App (CRA) because it uses native ES modules during development.

## Real World Example
Imagine you are building a house. You need tools like hammers and saws. Node.js and Vite are your digital tools that help you build your React application efficiently.

## Code
Here is how you initialize a new Vite project:

```bash
npm create vite@latest shoe-store -- --template react
cd shoe-store
npm install
npm run dev
```

### Line-by-Line Explanation
1. `npm create vite@latest`: Runs the Vite scaffold tool.
2. `cd shoe-store`: Changes directory into your new project.
3. `npm install`: Installs the required dependencies.
4. `npm run dev`: Starts the local development server.

## Common Errors
> [!warning]
> If you see `npm ERR! code ENOENT`, it means you forgot to `cd` into the project directory before running `npm install`.

## Summary
You have now set up your local development environment and are ready to start writing React code!

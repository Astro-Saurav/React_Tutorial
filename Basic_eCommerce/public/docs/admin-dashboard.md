---
title: Admin Dashboard
description: Building an Admin Dashboard with Local Storage, auto-reset, and basic authentication.
difficulty: Advanced
readingTime: 10 min
chapter: 4
lesson: 1
tags:
  - Project
  - State
  - Local Storage
  - Auth
previous: project
---

# Admin Dashboard & Local State

In a real eCommerce application, you need an Admin Dashboard to manage your inventory. However, because this is a public portfolio piece or demo, we want to ensure visitors can experience the Admin features without permanently corrupting the site for everyone else.

## Lesson Objective
Learn how to build an authenticated Admin Dashboard that uses `localStorage` for state persistence, and implements an intelligent auto-reset mechanism after 5 minutes.

## Theory: The Auto-Reset Concept

When a user adds or deletes a product, we want to save that state to their browser using `localStorage`. Along with the product data, we will save a timestamp (`last_modified`). 

Every time our application loads, we will check that timestamp. If the current time is more than 5 minutes past the timestamp, we will forcefully wipe their `localStorage` and reset the products back to the original default 8 sneakers.

## Global Context Logic

File: `src/context/ProductContext.jsx`
```jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { products as defaultProducts } from '../data/products';

const ProductContext = createContext();
const RESET_TIME_MS = 5 * 60 * 1000; // 5 minutes

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(defaultProducts);

  useEffect(() => {
    // Check localStorage on initial load
    const storedData = localStorage.getItem('demo_products');
    const lastModified = localStorage.getItem('demo_products_last_modified');

    if (storedData && lastModified) {
      const timePassed = Date.now() - parseInt(lastModified, 10);
      
      if (timePassed < RESET_TIME_MS) {
        // Less than 5 mins ago, load stored products
        setProducts(JSON.parse(storedData));
      } else {
        // Data expired! Clear it and use defaults
        localStorage.removeItem('demo_products');
        localStorage.removeItem('demo_products_last_modified');
        setProducts(defaultProducts);
      }
    }
  }, []);

  const saveProducts = (newProducts) => {
    setProducts(newProducts);
    localStorage.setItem('demo_products', JSON.stringify(newProducts));
    localStorage.setItem('demo_products_last_modified', Date.now().toString());
  };

  // Add and Delete logic wrapped in our save function
  const addProduct = (product) => saveProducts([...products, { ...product, id: Date.now().toString() }]);
  const deleteProduct = (id) => saveProducts(products.filter(p => p.id !== id));

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
```

## Basic Authentication

To prevent just anyone from accidentally stumbling into the admin area, we can add a very basic authentication barrier. 

Because our app is purely client-side right now without a real backend database, we can simply hardcode the credentials (`admin` / `admin`).

File: `src/pages/admin/Admin.jsx`
```jsx
import React, { useState } from 'react';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={(e) => {
          e.preventDefault();
          if (username === 'admin' && password === 'admin') {
            setIsAuthenticated(true);
          } else {
            alert('Invalid credentials!');
          }
        }}>
          {/* Form Inputs Here */}
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {/* Product Management Table Here */}
    </div>
  );
}
```

### Line-by-Line Explanation
1. `const [isAuthenticated, setIsAuthenticated] = useState(false);` - We start by assuming the user is not logged in.
2. `if (!isAuthenticated) { return (...) }` - If they are not logged in, we completely hijack the render output and show the login form instead of the dashboard. This is called an **early return**.
3. `if (username === 'admin' && password === 'admin')` - When they submit the form, we check their credentials. If they match, we set the state to `true`, which causes the component to re-render, bypass the early return, and show the actual dashboard!

## Common Errors
> [!warning]
> **Client-Side Security:** Hardcoding passwords like this is **ONLY** acceptable for demonstrations, mockups, or portfolios where there is no sensitive data. Never use this pattern in a real production application. Always use a proper backend authentication service (like Firebase, Auth0, or custom JWTs).

## Summary
You have now built a robust global state that persists across page reloads using `localStorage`, intelligently resets itself to prevent corruption, and is protected by a basic authentication guard!

---
title: State Management (Cart)
description: Building a global shopping cart using the Context API and useReducer.
difficulty: Advanced
readingTime: 10 min
chapter: 3
lesson: 3
tags:
  - Context API
  - State
  - Hooks
next: project/cart-drawer
previous: project/layout
---

# State Management: The Cart Context

When a user clicks "Add to Cart" on a product card, that product needs to be added to a list. That list needs to be visible inside the Cart Drawer, and the total count needs to update in the Navbar. This means multiple unrelated components need to share the exact same state.

## Lesson Objective
Learn how to use React's Context API combined with the `useReducer` hook to manage complex global state.

## Theory: Context vs. Props
Normally, we pass data down via Props. But if a Product Card and a Navbar are far apart in our component tree, passing props down through every middle component is called **Prop Drilling**. It's messy.
The **Context API** allows us to create a global "store" of data that any component can tap into directly, without passing props.

## Code: CartContext.jsx

File: `src/context/CartContext.jsx`
```jsx
import React, { createContext, useContext, useReducer } from 'react';

// 1. Create the Context
const CartContext = createContext();

// 2. Define the Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        // If it exists, increase quantity
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        };
      }
      // If it's new, add it with quantity: 1
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case 'REMOVE_FROM_CART':
      return { ...state, items: state.items.filter(i => i.id !== action.payload.id) };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload.id ? { ...i, quantity: action.payload.quantity } : i
        )
      };
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};

// 3. Create the Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// 4. Create a custom hook for easy access
export const useCart = () => useContext(CartContext);
```

### Line-by-Line Explanation
1. `const cartReducer = (state, action) => {` - A reducer is a pure function that takes the current `state` and an `action`, and returns a brand new state based on what that action is.
2. `switch (action.type)` - We use a switch statement to handle different types of actions like `ADD_TO_CART` or `REMOVE_FROM_CART`.
3. `const existing = state.items.find(...)` - Before blindly adding a shoe to the cart, we check if it's already in there. If it is, we just bump the `quantity` up by 1.
4. `export const useCart = () => useContext(CartContext);` - This custom hook means that in any other file, we just write `const { state, dispatch } = useCart();` to get instant access to the cart data!

## Using the Context
To make this work, we must wrap our entire application in the `CartProvider` inside `App.jsx`.

```jsx
// src/App.jsx
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      {/* The rest of the App */}
    </CartProvider>
  );
}
```

## Summary
You've now built a robust, scalable state management system. Any component in your app can now dispatch actions to modify the cart or read the current items!

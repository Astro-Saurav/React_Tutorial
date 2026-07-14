---
title: The Cart Drawer
description: Animating a slide-out cart UI with Framer Motion.
difficulty: Advanced
readingTime: 8 min
chapter: 3
lesson: 4
tags:
  - Animation
  - Framer Motion
  - UI
next: project/product-card
previous: project/cart-context
---

# The Cart Drawer

Now that our Cart state is stored globally, we need a beautiful way to display it. Instead of navigating the user to a completely different page, we are going to build a slide-out "Drawer" that appears from the right side of the screen.

## Lesson Objective
Learn how to use **Framer Motion** and the `AnimatePresence` component to smoothly animate a component in and out of the React DOM.

## Theory: Framer Motion
Normally in React, when a component is removed from the DOM (e.g. `if (isOpen) { <Drawer/> }`), it disappears instantly. You can't run a CSS transition on an element that no longer exists!
Framer Motion solves this with `<AnimatePresence>`. By wrapping our conditional component in it, Framer Motion intercepts the unmounting process, plays an `exit` animation, and *then* removes it from the DOM.

## Code: CartDrawer.jsx

File: `src/components/CartDrawer.jsx`
```jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { state, dispatch } = useCart();
  
  const subtotal = state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* The Dark Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch({ type: 'TOGGLE_CART' })}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />
          
          {/* The Slide-Out Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border z-50 flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={() => dispatch({ type: 'TOGGLE_CART' })}>
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {state.items.length === 0 ? (
                <p className="text-muted-foreground">Your cart is empty.</p>
              ) : (
                state.items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.image} alt={item.name} className="h-24 w-24 rounded-lg object-cover" />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="font-bold">${item.price}</p>
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4 mt-2">
                         <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 }})}><Minus size={16}/></button>
                         <span>{item.quantity}</span>
                         <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 }})}><Plus size={16}/></button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
```

### Line-by-Line Explanation
1. `<AnimatePresence>` - Wraps our conditional `state.isOpen` block.
2. `initial={{ x: '100%' }}` - Before the drawer appears, it is shifted 100% to the right (off-screen).
3. `animate={{ x: 0 }}` - When it mounts, it slides to `x: 0` (its natural position).
4. `exit={{ x: '100%' }}` - When `state.isOpen` becomes false, it slides back off-screen before being removed.
5. `transition={{ type: 'spring', damping: 25, stiffness: 200 }}` - Instead of a boring linear transition, we apply a physics-based spring for a premium, bouncy feel.

## Summary
You have built a production-ready, beautifully animated cart drawer that connects directly to the global context we built in the previous lesson!

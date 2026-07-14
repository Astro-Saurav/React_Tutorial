---
title: Product Cards
description: Building animated, interactive product components.
difficulty: Intermediate
readingTime: 4 min
chapter: 3
lesson: 5
tags:
  - Components
  - Framer Motion
next: project/pages
previous: project/cart-drawer
---

# Product Cards

A shoe store is nothing without beautiful product displays. We need a reusable `ProductCard` component that can take in shoe data and render an interactive card with hover effects.

## Lesson Objective
Learn how to use Framer Motion's `whileInView` to trigger animations as the user scrolls, and implement advanced CSS hover states.

## Code: ProductCard.jsx

File: `src/components/ProductCard.jsx`
```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

export default function ProductCard({ product }) {
  const { dispatch } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden bg-muted rounded-2xl mb-4">
        
        {/* Conditional "New" Badge */}
        {product.isNew && (
          <span className="absolute top-4 left-4 z-10 bg-foreground text-background px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
            New
          </span>
        )}
        
        {/* The Shoe Image */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Add to Cart Button (Hidden by default, shown on hover) */}
        <button 
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
          className="absolute bottom-4 right-4 bg-background text-foreground p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
      
      {/* Product Details */}
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-1">{product.category}</p>
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="font-medium mt-1">${product.price}</p>
      </div>
    </motion.div>
  );
}
```

### Line-by-Line Explanation
1. `whileInView={{ opacity: 1, y: 0 }}` - This is incredibly powerful. Framer Motion will automatically watch the user's scroll position. When this specific card enters the viewport, it will fade in and slide up.
2. `viewport={{ once: true }}` - We only want the animation to happen the *first* time they scroll down, otherwise it gets annoying.
3. `className="group ..."` - By adding the Tailwind `group` class to the parent, we can trigger hover effects on child elements when the *parent* is hovered.
4. `group-hover:scale-105` - On the image, we scale it up slightly when the parent card is hovered.
5. `opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0` - The "Add to Cart" button is completely invisible and shifted down by default. When the card is hovered, it fades in and slides up into place.

## Summary
By combining Tailwind's `group-hover` utility classes with Framer Motion's `whileInView` props, we've created a highly premium, interactive product card that can be reused anywhere in our application!

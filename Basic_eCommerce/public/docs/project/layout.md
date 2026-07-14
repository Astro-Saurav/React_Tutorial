---
title: Building the Layout
description: Constructing a premium Glassmorphism Navbar and standard Footer.
difficulty: Intermediate
readingTime: 6 min
chapter: 3
lesson: 2
tags:
  - Layout
  - Tailwind
  - Glassmorphism
next: project/cart-context
previous: project
---

# Building the Layout

Every great eCommerce site starts with a rock-solid layout. For our Nike-inspired shoe store, we want a premium, modern feel. We achieve this using a design trend called **Glassmorphism**.

## Lesson Objective
Learn how to use Tailwind CSS 4 to create a sticky, frosted-glass navigation bar and a responsive footer.

## Theory: Glassmorphism
Glassmorphism is a UI trend where elements look like frosted glass. You can see what's behind them, but it's heavily blurred. In CSS, this is achieved using the `backdrop-filter` property. In Tailwind, we use the `backdrop-blur-md` class combined with a semi-transparent background color (e.g., `bg-background/80`).

## Code: The Navbar

File: `src/components/Navbar.jsx`
```jsx
import React from 'react';
import { Link } from 'react-router';
import { ShoppingBag, Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Mobile Menu & Logo */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground">
            <Menu className="h-6 w-6" />
          </button>
          <Link to="/" className="text-2xl font-black tracking-tighter uppercase">
            SNEAKERS
          </Link>
        </div>
        
        {/* Center: Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-8 font-medium">
          <Link to="/products" className="hover:text-muted-foreground transition-colors">Men</Link>
          <Link to="/products" className="hover:text-muted-foreground transition-colors">Women</Link>
          <Link to="/products" className="hover:text-muted-foreground transition-colors">Kids</Link>
          <Link to="/products" className="hover:text-muted-foreground transition-colors">Collections</Link>
        </nav>

        {/* Right: Icons & Cart */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-foreground hover:text-muted-foreground transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 text-foreground hover:text-muted-foreground transition-colors relative">
            <ShoppingBag className="h-5 w-5" />
            {/* The Cart Badge will go here eventually! */}
          </button>
        </div>
        
      </div>
    </header>
  );
}
```

### Line-by-Line Explanation
1. `sticky top-0 z-50` - This keeps the Navbar glued to the top of the screen as the user scrolls, and ensures it stays on top of other content.
2. `bg-background/80 backdrop-blur-md` - This is the magic! We set the background to 80% opacity and apply a medium blur to everything behind the Navbar.
3. `<Search className="h-5 w-5" />` - We are using the premium SVG icons from the `lucide-react` library.

## Common Errors
> [!warning]
> **Z-Index Issues:** If your frosted glass Navbar gets covered up by images or cards as you scroll down the page, it means the content has a higher `z-index` than your Navbar. Always ensure your sticky headers have a high `z-index` (like `z-50`).

## Summary
You've now built a sleek, modern navigation bar. In the next lesson, we will build the global state required to actually add shoes to that Cart icon!

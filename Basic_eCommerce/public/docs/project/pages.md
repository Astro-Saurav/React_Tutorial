---
title: Pages & Routing
description: Connecting everything together using React Router v7.
difficulty: Intermediate
readingTime: 5 min
chapter: 3
lesson: 6
tags:
  - React Router
  - Pages
previous: project/product-card
next: admin-dashboard
---

# Pages & Routing

We have all of our puzzle pieces: The Navbar, the Cart Context, the Cart Drawer, and the Product Cards. It's time to assemble the final Lego Castle!

## Lesson Objective
Learn how to compose full page views and set up client-side routing using React Router v7.

## Code: Home Page

File: `src/pages/Home.jsx`
```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const { products } = useProducts();
  const featured = products.slice(0, 4); // Just show the first 4 on the homepage

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-muted">
        <div className="absolute inset-0 z-0">
          <img src="/images/shoe7.jpg" alt="Hero background" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black uppercase"
          >
            Just Do It.
          </motion.h1>
          <motion.button 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="mt-10 px-8 py-4 bg-foreground text-background font-bold text-lg rounded-full"
          >
            Shop Now
          </motion.button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-black mb-12">Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
```

## Routing Configuration

Now we need to tell React Router which page to show based on the URL in the browser. We do this in `App.jsx`. Notice how we wrap the entire routing structure inside our two global Context Providers.

File: `src/App.jsx`
```jsx
import React from 'react';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Products from './pages/Products';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="min-h-screen bg-background text-foreground font-sans">
          
          {/* These components are outside of Routes, so they show on EVERY page */}
          <Navbar />
          <CartDrawer />
          
          <main>
            <Routes>
              {/* When the URL is /, show Home. When it is /products, show Products */}
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </main>

          <footer>
            <h2>Sneakers</h2>
          </footer>
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
```

## Summary
Congratulations! You have successfully built the entire Premium Shoe Store layout and architecture. You learned how to compose complex UI elements, handle global state, execute smooth animations, and route between different page views.

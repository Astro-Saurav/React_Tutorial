import React from 'react';
import { motion } from 'framer-motion';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const { products } = useProducts();
  const featured = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-muted">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/shoe7.jpg" 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter"
          >
            Just Do It.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl"
          >
            Discover the latest drops, exclusive collaborations, and performance gear to elevate your game.
          </motion.p>
          <motion.button 
            onClick={() => window.scrollTo({ top: document.getElementById('trending').offsetTop, behavior: 'smooth'})}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 px-8 py-4 bg-foreground text-background font-bold text-lg rounded-full hover:scale-105 transition-transform"
          >
            Shop Now
          </motion.button>
        </div>
      </section>

      {/* Featured Products */}
      <section id="trending" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-black tracking-tight">Trending Now</h2>
          <button 
            onClick={() => window.location.href='/products'}
            className="text-muted-foreground hover:text-foreground font-medium transition-colors"
          >
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {featured.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground py-10">No products available.</p>
          )}
        </div>
      </section>
    </div>
  );
}

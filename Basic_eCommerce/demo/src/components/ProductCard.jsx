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
        {product.isNew && (
          <span className="absolute top-4 left-4 z-10 bg-foreground text-background px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
            New
          </span>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <button 
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
          className="absolute bottom-4 right-4 bg-background text-foreground p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-1">{product.category}</p>
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="font-medium mt-1">${product.price}</p>
      </div>
    </motion.div>
  );
}

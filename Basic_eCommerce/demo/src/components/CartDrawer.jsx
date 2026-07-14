import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { state, dispatch } = useCart();
  
  const subtotal = state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch({ type: 'TOGGLE_CART' })}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border z-50 flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={() => dispatch({ type: 'TOGGLE_CART' })} className="p-2 hover:bg-muted rounded-full">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {state.items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                state.items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-24 w-24 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <p className="font-bold">${item.price}</p>
                        <div className="flex items-center border border-border rounded-md">
                          <button 
                            onClick={() => {
                              if (item.quantity > 1) {
                                dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 }});
                              } else {
                                dispatch({ type: 'REMOVE_FROM_CART', payload: { id: item.id }});
                              }
                            }}
                            className="p-1 hover:bg-muted"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 }})}
                            className="p-1 hover:bg-muted"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {state.items.length > 0 && (
              <div className="p-6 border-t border-border bg-background">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold text-muted-foreground">Subtotal</span>
                  <span className="font-bold text-xl">${subtotal.toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => {
                    alert("Checkout Successful! Thank you for your purchase.");
                    dispatch({ type: 'TOGGLE_CART' });
                    // Hacky way to clear cart in demo
                    state.items.forEach(item => dispatch({ type: 'REMOVE_FROM_CART', payload: { id: item.id }}));
                  }}
                  className="w-full bg-foreground text-background py-4 rounded-full font-bold hover:opacity-90 transition-opacity"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

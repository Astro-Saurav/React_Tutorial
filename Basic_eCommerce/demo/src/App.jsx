import React from 'react';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Products from './pages/Products';
import Admin from './pages/admin/Admin';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="min-h-screen bg-background text-foreground font-sans">
          <Navbar />
          <CartDrawer />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>

          <footer className="border-t border-border mt-20 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter">Sneakers</h2>
              <p className="text-muted-foreground text-sm">
                &copy; {new Date().getFullYear()} Premium Shoe Store Demo. Built with React & Tailwind 4.
              </p>
            </div>
          </footer>
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;

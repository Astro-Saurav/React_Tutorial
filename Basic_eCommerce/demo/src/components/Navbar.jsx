import React from 'react';
import { Link } from 'react-router';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { state, dispatch } = useCart();
  
  const totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground">
            <Menu className="h-6 w-6" />
          </button>
          <Link to="/" className="text-2xl font-black tracking-tighter uppercase">
            SNEAKERS
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8 font-medium">
          <Link to="/products" className="hover:text-muted-foreground transition-colors">Men</Link>
          <Link to="/products" className="hover:text-muted-foreground transition-colors">Women</Link>
          <Link to="/products" className="hover:text-muted-foreground transition-colors">Kids</Link>
          <Link to="/products" className="hover:text-muted-foreground transition-colors">Collections</Link>
          <Link to="/admin" className="text-red-500 hover:text-red-600 transition-colors">Admin Dashboard</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-foreground hover:text-muted-foreground transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button 
            onClick={() => dispatch({ type: 'TOGGLE_CART' })}
            className="p-2 text-foreground hover:text-muted-foreground transition-colors relative"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-background">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

import React from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';

export default function Products() {
  const { products } = useProducts();

  return (
    <div className="min-h-screen pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">All Sneakers</h1>
          <p className="text-muted-foreground">Explore our entire collection.</p>
        </div>
        <button 
          onClick={() => alert("Filter drawer coming soon!")}
          className="flex items-center gap-2 border border-border px-4 py-2 rounded-full hover:bg-muted transition-colors self-start md:self-auto"
        >
          <Filter className="h-4 w-4" />
          <span className="font-medium">Filter & Sort</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {products.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground py-20">
            <p className="text-xl">No products found.</p>
            <p className="mt-2">Go to the Admin dashboard to add some!</p>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { createContext, useContext, useState, useEffect } from 'react';
import { products as defaultProducts } from '../data/products';

const ProductContext = createContext();
const RESET_TIME_MS = 5 * 60 * 1000; // 5 minutes

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(defaultProducts);

  useEffect(() => {
    const loadProducts = () => {
      const storedData = localStorage.getItem('demo_products');
      const lastModified = localStorage.getItem('demo_products_last_modified');

      if (storedData && lastModified) {
        const timePassed = Date.now() - parseInt(lastModified, 10);
        if (timePassed < RESET_TIME_MS) {
          // Less than 5 mins, load stored products
          setProducts(JSON.parse(storedData));
        } else {
          // Expired, clear and use default
          localStorage.removeItem('demo_products');
          localStorage.removeItem('demo_products_last_modified');
          setProducts(defaultProducts);
        }
      }
    };

    loadProducts();
  }, []);

  const saveProducts = (newProducts) => {
    setProducts(newProducts);
    localStorage.setItem('demo_products', JSON.stringify(newProducts));
    localStorage.setItem('demo_products_last_modified', Date.now().toString());
  };

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now().toString(),
    };
    saveProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    saveProducts(products.filter(p => p.id !== id));
  };

  // Helper to force reset for admin tests
  const resetToDefault = () => {
    localStorage.removeItem('demo_products');
    localStorage.removeItem('demo_products_last_modified');
    setProducts(defaultProducts);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct, resetToDefault }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);

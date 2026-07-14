import React, { useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import { Trash2, Plus, RefreshCcw } from 'lucide-react';

export default function Admin() {
  const { products, addProduct, deleteProduct, resetToDefault } = useProducts();
  const [isAdding, setIsAdding] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    image: '/images/shoe1.jpg' // Default image selection
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center px-4">
        <div className="bg-muted p-8 rounded-xl border border-border w-full max-w-md shadow-lg">
          <h2 className="text-2xl font-black mb-6 text-center tracking-tight">Admin Login</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (username === 'admin' && password === 'admin') {
              setIsAuthenticated(true);
            } else {
              alert('Invalid ID or Password. Try admin / admin');
            }
          }}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Admin ID</label>
              <input 
                type="text" 
                required 
                className="w-full p-2 rounded-md bg-background border border-border" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input 
                type="password" 
                required 
                className="w-full p-2 rounded-md bg-background border border-border" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
              />
            </div>
            <button type="submit" className="w-full bg-foreground text-background py-3 rounded-md font-bold hover:opacity-90 transition-opacity">
              Login to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.category) return;
    
    addProduct({
      name: formData.name,
      price: parseFloat(formData.price),
      category: formData.category,
      image: formData.image,
      isNew: true
    });
    
    setFormData({ name: '', price: '', category: '', image: '/images/shoe1.jpg' });
    setIsAdding(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Changes here are stored locally and will revert after 5 minutes.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={resetToDefault}
            className="flex items-center gap-2 border border-border px-4 py-2 rounded-md hover:bg-muted transition-colors"
          >
            <RefreshCcw className="h-4 w-4" />
            <span className="font-medium">Force Reset</span>
          </button>
          <button 
            onClick={() => setIsAdding(!isAdding)}
            className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            <Plus className="h-4 w-4" />
            <span className="font-medium">{isAdding ? 'Cancel' : 'Add Product'}</span>
          </button>
        </div>
      </div>

      {isAdding && (
        <div className="bg-muted p-6 rounded-xl mb-8 border border-border">
          <h2 className="text-xl font-bold mb-4">Add New Sneaker</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input 
                type="text" 
                required
                className="w-full p-2 rounded-md bg-background border border-border" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <input 
                type="number" 
                required
                min="0"
                step="0.01"
                className="w-full p-2 rounded-md bg-background border border-border" 
                value={formData.price}
                onChange={e => setFormData({...formData, price: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <input 
                type="text" 
                required
                className="w-full p-2 rounded-md bg-background border border-border" 
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Select Image</label>
              <select 
                className="w-full p-2 rounded-md bg-background border border-border"
                value={formData.image}
                onChange={e => setFormData({...formData, image: e.target.value})}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={`/images/shoe${num}.jpg`}>
                    Shoe Image {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2 mt-4">
              <button type="submit" className="w-full bg-foreground text-background py-3 rounded-md font-bold">
                Save Product
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="border border-border rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-muted border-b border-border">
              <th className="p-4 font-bold">Image</th>
              <th className="p-4 font-bold">Name</th>
              <th className="p-4 font-bold">Category</th>
              <th className="p-4 font-bold">Price</th>
              <th className="p-4 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-b border-border last:border-b-0 hover:bg-muted/50">
                <td className="p-4">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md bg-muted" />
                </td>
                <td className="p-4 font-medium">{product.name}</td>
                <td className="p-4 text-muted-foreground">{product.category}</td>
                <td className="p-4 font-bold">${product.price}</td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => deleteProduct(product.id)}
                    className="p-2 text-red-500 hover:bg-red-500/10 rounded-md transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="5" className="p-8 text-center text-muted-foreground">
                  No products found. Add some or click Force Reset.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

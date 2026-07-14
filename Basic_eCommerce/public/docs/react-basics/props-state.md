---
title: Props & State
description: Making your components dynamic and interactive.
difficulty: Intermediate
readingTime: 8 min
chapter: 2
lesson: 3
tags:
  - React
  - Props
  - State
  - Hooks
next: project
previous: react-basics/components
---

# Props & State

Static components are boring. To make an interactive Shoe Store, our components need to handle dynamic data (like shoe names and prices) and remember things (like how many items are in the cart). We achieve this using **Props** and **State**.

## Lesson Objective
Master the difference between Props (passing data down) and State (managing internal component memory).

## Theory

### Props (Properties)
Props are how you pass data from a parent component down to a child component. They are read-only; a child component can never modify the props it receives.

### State
State is a component's internal memory. When a component's state changes, React automatically re-renders that component to update the UI. We use the `useState` Hook to manage state in functional components.

## Code: Props Example

File: `src/components/ShoeCard.jsx`
```jsx
import React from 'react';

// We extract 'name' and 'price' from the props object
export default function ShoeCard({ name, price }) {
  return (
    <div className="border border-gray-200 p-4 rounded-xl shadow-sm">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">${price.toFixed(2)}</p>
      <button className="mt-4 px-4 py-2 bg-black text-white rounded-md w-full">
        Add to Cart
      </button>
    </div>
  );
}
```

File: `src/App.jsx`
```jsx
import React from 'react';
import ShoeCard from './components/ShoeCard';

export default function App() {
  return (
    <div className="flex gap-4 p-8">
      {/* We pass specific data down via props */}
      <ShoeCard name="Air Max 270" price={150} />
      <ShoeCard name="Ultraboost 22" price={190} />
    </div>
  );
}
```

## Code: State Example
Now let's use State to make the "Add to Cart" button actually do something!

File: `src/components/ShoeCard.jsx`
```jsx
import React, { useState } from 'react';

export default function ShoeCard({ name, price }) {
  // Define state: [currentValue, functionToUpdateValue]
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true); // This tells React to re-render the component!
  };

  return (
    <div className="border border-gray-200 p-4 rounded-xl shadow-sm">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">${price.toFixed(2)}</p>
      
      <button 
        onClick={handleAddToCart}
        disabled={inCart}
        className={`mt-4 px-4 py-2 rounded-md w-full transition-colors ${
          inCart ? 'bg-green-500 text-white' : 'bg-black text-white hover:bg-gray-800'
        }`}
      >
        {inCart ? 'Added to Cart ✓' : 'Add to Cart'}
      </button>
    </div>
  );
}
```

### Line-by-Line Explanation
1. `import React, { useState } from 'react';` - We import the `useState` hook.
2. `const [inCart, setInCart] = useState(false);` - We initialize a state variable `inCart` to `false`.
3. `onClick={handleAddToCart}` - We attach an event listener to the button.
4. `setInCart(true)` - When clicked, we update the state. React notices this state change and redraws the UI, which updates the button text and color instantly.

## Common Errors
> [!warning]
> **Mutating State Directly:** Never do `inCart = true`. This will not trigger a re-render. Always use the setter function provided by `useState`, e.g., `setInCart(true)`.

## Summary
* **Props** are arguments passed to components. They are read-only.
* **State** is local memory for a component. Updating it causes a re-render.

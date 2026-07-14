---
title: Project Overview
description: Architecture of the Nike-inspired Shoe Store
difficulty: Beginner
readingTime: 4 min
chapter: 3
lesson: 1
tags:
  - Project
  - Architecture
previous: react-basics/props-state
---

# Project: Premium Shoe Store

Congratulations on making it through the React fundamentals! It is now time to apply everything we've learned to build a production-grade, highly scalable, and beautifully designed eCommerce platform.

## The Goal
We are going to build a Nike-inspired shoe store. It will feature:
* **Glassmorphism UI:** Modern frosted glass effects.
* **Micro-interactions:** Beautiful hover states and Framer Motion page transitions.
* **Dark Mode:** Seamless theme toggling.
* **Cart System:** Complete state management using the Context API.
* **Admin Dashboard:** A backend UI to manage products and orders.

## Folder Architecture
To keep our massive project organized, we will adhere to a strict folder architecture. Let's look at the structure we will be building in the upcoming lessons:

```text
src/
├── components/          # Reusable UI components
│   ├── layout/          # Navbar, Footer, Sidebar
│   ├── ui/              # Buttons, Inputs, Cards
│   └── cart/            # Cart drawer, Cart items
├── pages/               # Full page views
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   ├── Checkout.jsx
│   └── admin/           # Admin dashboard views
├── context/             # React Context providers (CartContext, ThemeContext)
├── hooks/               # Custom React hooks (useCart, useTheme)
├── utils/               # Helper functions (currency formatting)
├── data/                # Mock JSON data for our shoes
└── styles/              # Tailwind CSS entry point
```

## Designing the UI
Our UI will rely heavily on **Tailwind CSS 4**. We will build out a customized design system using CSS variables to ensure our branding remains consistent whether the user is in Light Mode or Dark Mode.

> [!tip]
> When building complex pages, always start by breaking the design down into a tree of small, isolated React components. Build the small components first (Bottom-Up approach).

## Next Steps
In the next chapter, we will begin coding the **Layout & Navbar**. Prepare your development environment!

import React from 'react';
import { Link } from 'react-router';
import { BookOpen, Terminal, Code2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] flex flex-col overflow-hidden">
      
      {/* Premium Glowing Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20 blur-[120px] rounded-full bg-blue-600 mix-blend-screen" />
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] opacity-10 blur-[100px] rounded-full bg-purple-600 mix-blend-screen" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 pb-32 max-w-5xl mx-auto">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm font-medium mb-8 backdrop-blur-sm">
          🚀 <span className="ml-2 text-muted-foreground">React 19 & Tailwind 4 Ready</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
          Build the Future of eCommerce.
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed">
          The most comprehensive, beautifully designed course on building a production-ready Shoe Store. Learn React, Tailwind CSS, and Framer Motion from the ground up.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link 
            to="/docs" 
            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            Start Learning
          </Link>
          <a 
            href="http://localhost:5174" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-border bg-muted/50 text-foreground font-bold text-lg hover:bg-muted transition-colors backdrop-blur-sm"
          >
            View Live Demo
          </a>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl border border-border bg-muted/30 backdrop-blur-sm">
          <BookOpen className="h-8 w-8 mb-4 text-blue-400" />
          <h3 className="text-xl font-bold mb-2">Step-by-Step</h3>
          <p className="text-muted-foreground">Never get lost. Every line of code is explained with theory, visual diagrams, and common errors to avoid.</p>
        </div>
        <div className="p-8 rounded-2xl border border-border bg-muted/30 backdrop-blur-sm">
          <Code2 className="h-8 w-8 mb-4 text-purple-400" />
          <h3 className="text-xl font-bold mb-2">Production Code</h3>
          <p className="text-muted-foreground">Learn the architecture and folder structures used by senior engineers at top tech companies.</p>
        </div>
        <div className="p-8 rounded-2xl border border-border bg-muted/30 backdrop-blur-sm">
          <Terminal className="h-8 w-8 mb-4 text-emerald-400" />
          <h3 className="text-xl font-bold mb-2">Modern Stack</h3>
          <p className="text-muted-foreground">Built with React 19, React Router v7, Tailwind CSS 4, and Framer Motion for the ultimate developer experience.</p>
        </div>
      </div>
    </div>
  );
}

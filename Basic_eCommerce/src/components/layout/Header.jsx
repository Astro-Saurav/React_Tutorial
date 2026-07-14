import { Link } from 'react-router';
import { Code, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl transition-colors">
      <div className="flex h-14 max-w-screen-2xl items-center px-4 md:px-8 mx-auto">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-black text-xl tracking-tighter">ShoeStore<span className="text-blue-500">.dev</span></span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/docs" className="transition-colors hover:text-foreground/80 text-foreground">
              Documentation
            </Link>
            <a href="http://localhost:5174" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Live Demo
            </a>
            <a href="https://github.com/Astro-Saurav/" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground/80 text-foreground/60 hidden sm:inline-block">
              GitHub
            </a>
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <button className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64">
              <span className="hidden lg:inline-flex items-center gap-2">
                <Search className="h-4 w-4"/> Search documentation...
              </span>
              <span className="inline-flex lg:hidden"><Search className="h-4 w-4"/></span>
              <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
          </div>
          <nav className="flex items-center">
            <a target="_blank" rel="noreferrer" href="https://github.com/Astro-Saurav/">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-muted h-9 w-9">
                <Code className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

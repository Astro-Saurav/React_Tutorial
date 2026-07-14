export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">
        The page you are looking for does not exist.
      </p>
      <a href="/" className="px-6 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity">
        Go Home
      </a>
    </div>
  );
}

import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background font-sans antialiased text-foreground">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs/*" element={<Layout><Docs /></Layout>} />
          <Route path="/search" element={<Layout><Search /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

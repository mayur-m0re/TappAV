import { useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

// Simple navigation component
function Navigation({ onNavigate, currentPage }: { onNavigate: (page: string) => void, currentPage: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-tappav-bg/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-[4vw] py-4">
        <button 
          onClick={() => onNavigate('home')}
          className="font-heading font-bold text-xl text-tappav-text tracking-wide hover:text-tappav-accent transition-colors"
        >
          TappAV
        </button>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => onNavigate('home')} className="nav-link text-sm font-medium">Shop</button>
            <button onClick={() => onNavigate('product')} className="nav-link text-sm font-medium">Projectors</button>
            <button onClick={() => onNavigate('home')} className="nav-link text-sm font-medium">Audio</button>
            <button onClick={() => onNavigate('home')} className="nav-link text-sm font-medium">Support</button>
          </div>
          
          {currentPage === 'product' && (
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 text-tappav-text-muted hover:text-tappav-text transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back</span>
            </button>
          )}
          
          <button className="relative p-2 text-tappav-text hover:text-tappav-accent transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-tappav-accent rounded-full flex items-center justify-center">
              <span className="text-[10px] font-bold text-tappav-bg">0</span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative min-h-screen bg-tappav-bg">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navigation onNavigate={handleNavigate} currentPage={currentPage} />
      
      {/* Main content */}
      <main>
        {currentPage === 'home' ? (
          <HomePage onNavigate={handleNavigate} />
        ) : (
          <ProductPage onNavigate={handleNavigate} />
        )}
      </main>
    </div>
  );
}

export default App;

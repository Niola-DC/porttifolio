import { useState, useEffect } from 'react';

export default function HeaderFlor({ menuToggle, isMenuOpen }) {
  const [showHeaderName, setShowHeaderName] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const trigger = window.scrollY > window.innerHeight * 0.5; // adjust threshold if needed
      setShowHeaderName(trigger);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full px-6 py-6 flex justify-between items-center bg-none z-50">
      <button
        onClick={menuToggle}
      
        className={` rounded-lg px-3 py-1.5 text-xs hover:bg-white hover:text-black transition-colors ${
          showHeaderName ? 'bg-white text-black border border-black' : ' bg-transparent border border-white'
        }`}>
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>

      <div className="text-center flex-1">
        {showHeaderName ? (
          <h1 className="text-lg md:text-xl font-bold uppercase tracking-widest text-black">Eniola</h1>
        ) : (
          <h2 className="text-sm md:text-base lg:text-xl font-light italic">Making brands beautiful in digital</h2>
        )}
      </div>

      <button className={`rounded-lg px-3 py-1.5 text-xs hover:bg-white hover:text-black transition-colors ${
          showHeaderName ? 'bg-white text-black border border-black' : ' bg-transparent border border-white'
        }`}>
        Book a Call
      </button>
    </header>
  );
}
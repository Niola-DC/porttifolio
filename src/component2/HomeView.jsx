import { useState, useEffect } from 'react';

export default function HomeView() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorHover, setCursorHover] = useState(false);
  
  // Check if the device is mobile on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);
  
  // Set up hover detection for interactive elements
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseEnter = () => setCursorHover(true);
    const handleMouseLeave = () => setCursorHover(false);
    
    const interactiveElements = document.querySelectorAll('a, button');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isMobile, menuOpen]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Custom cursor (only shown on non-mobile devices) */}
      {!isMobile && (
        <div 
          className={`fixed rounded-full pointer-events-none z-50 transition-all duration-300 ease-out ${
            cursorHover ? 'w-8 h-8 bg-white' : 'w-4 h-4 bg-blue-500'
          }`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
            mixBlendMode: 'difference'
          }}
        />
      )}
      
      {/* Main content container with blur effect when menu is open */}
      <div className={`transition-all duration-500 ${menuOpen ? 'blur-md bg-gray-100/30' : ''}`}>
        {/* Navigation */}
        <header className="w-full px-6 py-6 flex justify-between items-center">
          <button 
            onClick={toggleMenu} 
            className="border border-white rounded-full px-4 py-1 text-sm hover:bg-white hover:text-black transition-colors"
          >
            Menu
          </button>
          <div className="text-center mx-4 flex-1">
            <h2 className="text-sm md:text-base lg:text-xl font-light italic">Making brands beautiful in digital</h2>
          </div>
          <button className="border border-white rounded-full px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors">
            Book a Call
          </button>
        </header>
        
        {/* Main Logo/Text */}
        <main className="flex items-center justify-center h-screen">
          <h1 className="font-skill tex text-8xl md:text-9xl lg:text-9xl xl:text-9xl font-bold tracking-tighter px-4 bottom-8 md:bottom-12">
            Eniola
          </h1>
        </main>
      </div>
      
      {/* Menu Dropdown - Slides in from top */}
      <div 
        className={`mt-2 mx-2 fixed inset-0 z-40 transition-all duration-500 overflow-hidden pointer-events-none ${
          menuOpen ? 'pointer-events-auto' : ''
        }`}
      >
        {/* Menu container - slides from top */}
        <div 
          className={`absolute inset-x-0 top-0 w-full lg:w-2/5 md:w-1/2 bg-black rounded-2xl flex flex-col justify-center p-8 shadow-2xl transition-transform duration-500 ${
            menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{ 
            height: '95vh', 
          }}
        >
          <div className="absolute top-6 left-6 pt-1">
            <button 
              onClick={toggleMenu} 
              className="border border-white rounded-full px-4 py-1 text-sm hover:bg-white hover:text-black transition-colors"
            >
              Close
            </button>
          </div>
          
          <nav className="text-4xl md:text-5xl lg:text-6xl space-y-4 font-serif">
            <div className="flex items-baseline">
            <a href="#" className="group-hover:text-blue-500 transition-colors duration-300">Home</a>

              {/* <a href="#" className="hover:text-gray-300 transition-colors">Home</a> */}
              <span className="text-lg ml-2 mt-1 align-top">01</span>
            </div>
            <div className="flex items-baseline">
              <span className="mx-2">/</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Work</a>
              <span className="text-lg ml-2 mt-1 align-top">02</span>
            </div>
            <div className="flex items-baseline">
              <span className="mx-2">/</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Services</a>
              <span className="text-lg ml-2 mt-1 align-top">03</span>
            </div>
            <div className="flex items-baseline">
              <span className="mx-2">/</span>
              <a href="#" className="hover:text-gray-300 transition-colors">About</a>
              <span className="text-lg ml-2 mt-1 align-top">04</span>
            </div>
            <div className="flex items-baseline">
              <span className="mx-2">/</span>
              <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
              <span className="text-lg ml-2 mt-1 align-top">05</span>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Global styles to hide default cursor */}
      {!isMobile && (
        <style jsx global>{`
          body {
            cursor: none;
          }
          a, button, input, select, textarea {
            cursor: none;
          }
        `}</style>
      )}
      
      {/* Accessibility feature - screen reader only content */}
      <span className="sr-only">Eniola - Digital Branding Agency</span>
    </div>
  );
}
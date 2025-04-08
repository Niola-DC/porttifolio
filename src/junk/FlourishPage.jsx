import { useState, useEffect } from 'react';

export default function FlourishPage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
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
  
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Custom cursor (only shown on non-mobile devices) */}
      {!isMobile && (
        <div 
          className="fixed w-4 h-4 rounded-full bg-red-500 pointer-events-none z-50 transition-transform duration-75 ease-out"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}
      
      {/* Navigation */}
      <header className="w-full px-6 py-6 flex justify-between items-center">
        <button className="border border-white rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
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
        <h1 className="text-8xl md:text-9xl lg:text-9xl xl:text-9xl font-bold tracking-tighter px-4 absolute bottom-8 md:bottom-12">
          flourish
        </h1>
      </main>
      
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
      <span className="sr-only">Flourish - Digital Branding Agency</span>
    </div>
  );
}






export function HomeView() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
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
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Custom cursor (only shown on non-mobile devices) */}
      {!isMobile && (
        <div 
          className=" fixed w-5 h-5 rounded-full bg-blue-500 pointer-events-none z-50 transition-transform duration-75 ease-out"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}
      
      {/* Navigation */}
      <header className={`w-full px-6 py-6 flex justify-between items-center ${menuOpen ? 'hidden' : 'block'}`}>
        <button 
          onClick={toggleMenu} 
          className="border no-cursor-blue-100 border-white rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors"
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
      
      {/* Menu Dropdown */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Left side - Black background with menu links */}
          <div className="w-full md:w-1/2 bg-black flex flex-col justify-center p-8">
            <div className="absolute top-6 left-6">
              <button 
                onClick={toggleMenu} 
                className="border border-white rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors"
              >
                Close
              </button>
            </div>
            
            <nav className="text-4xl md:text-5xl lg:text-6xl space-y-4 font-serif">
              <div className="flex items-baseline">
                <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
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
          
          {/* Right side - Gray background with logo */}
          <div className="hidden md:block md:w-1/2 bg-gray-400 relative">
            <div className="absolute top-6 right-6">
              <button className="border border-white rounded-full px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                Book a Call
              </button>
            </div>
            <div className="absolute top-0 left-0 w-full p-6 text-center">
              <h2 className="text-base lg:text-xl font-light italic text-white">Making brands beautiful in digital</h2>
            </div>
            <div className="absolute bottom-0 right-0 p-6">
              <h1 className="text-8xl font-bold tracking-tighter text-white opacity-50">
                urish
              </h1>
            </div>
          </div>
        </div>
      )}
      
      {/* Main Logo/Text - Only shown when menu is closed */}
      {!menuOpen && (
        <main className="flex items-center justify-center h-screen">
          <h1 className="text-8xl md:text-9xl lg:text-9xl xl:text-9xl font-bold tracking-tighter px-4 absolute bottom-8 md:bottom-12">
            flourish
          </h1>
        </main>
      )}
      
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
      {/* <span className="sr-only">Flourish - Digital Branding Agency</span> */}
    </div>
  );
}
import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
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
  }, [isMobile]);
  
  if (isMobile) return null;
  
  return (
    <>
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
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, input, select, textarea {
          cursor: none;
        }
      `}</style>
    </>
  );
}
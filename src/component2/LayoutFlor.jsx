import { useState } from 'react';
import VideoBox from '../composite/VieBox';
import CustomCursor from './CustomCursor';
import HeaderFlor from './HeaderFlor';
import Menu from './Menu';


export default function LayoutFlor({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background video */}
      {/* {showVideo && (
        <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20">
          <VideoBox src='/src/assets/bg-vid.mp4' poster='Bg-video' />
        </div>
      )} */}

      {/* Custom cursor */}
      <CustomCursor />

      {/* Header */}
      <HeaderFlor menuToggle={toggleMenu} isMenuOpen={menuOpen} />

      {/* Main content container with blur effect when menu is open */}
      <div className={`relative z-10 transition-all duration-500 ${menuOpen ? 'blur-md bg-gray-100/30' : ''}`}>
        {children}
      </div>

      {/* Menu Dropdown */}
      <Menu isOpen={menuOpen} onClose={toggleMenu} />

      {/* Accessibility feature - screen reader only content */}
      <span className="sr-only">Eniola - Digital Branding Agency</span>
    </div>
  );
}
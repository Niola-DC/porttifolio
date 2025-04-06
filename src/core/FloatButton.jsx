import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const FloatButton = () => {
    const bottomRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.offsetHeight;
      setIsAtBottom(scrollPosition >= documentHeight - 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
 return (
   <div>
     <button
        onClick={handleScroll}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-800 transition duration-300"
      >
        {isAtBottom ? <ChevronUpIcon width={24} /> : <ChevronDownIcon width={24} />}
      </button>

      <div ref={bottomRef} className="mt-10"></div>
   </div>
 )
}

export default FloatButton;
import React, { useEffect, useRef, useState } from 'react';
import LandingView from '../components/LandingView';
import LightUp from '../components/LightUp';
import ProjectView from '../components/ProjectView';
import ContactView from '../components/ContactView';
import { useLocation } from 'react-router-dom';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'; // Ensure proper import of icons
import SkillView from '../components/SkillView';
import SkillsSection from '../components/SkillSection';

const HomePage = () => {
  const bottomRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const location = useLocation();

  // Scroll to section based on hash in the URL
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      window.history.replaceState(null, "", window.location.pathname); // Clear the hash after scrolling
    }
  }, [location]);

  // Detect when user reaches the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.offsetHeight;
      setIsAtBottom(scrollPosition >= documentHeight - 10); // 10px threshold for bottom detection
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top or bottom based on the current state
  const handleScrollButtonClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    } else {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" }); // Scroll to bottom
    }
  };

  return (
    <div>
      <LandingView />
      <LightUp />
      <ProjectView />
      {/* <SkillView /> */}
      <SkillsSection />
      <ContactView />
      {/* <FloatButton /> */}
      {/* <button
        onClick={handleScrollButtonClick}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-800 transition duration-300"
      >
        {isAtBottom ? <ChevronUpIcon width={24} /> : <ChevronDownIcon width={24} />}
      </button> */}
      <button
        onClick={handleScrollButtonClick}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-6 rounded-full shadow-lg hover:bg-green-800 transition duration-300 text-lg font-extrabold h-20"
      >
        {isAtBottom ? "↑" : "↓"} {/* Use ↑ for top and ↓ for bottom */}
      </button>

      <div ref={bottomRef} className="mt-0"></div>
    </div>
  );
}

export default HomePage;

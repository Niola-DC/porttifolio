import React, { useRef } from 'react';
import SkillView from './SkillView';
import '../core/MarqueeBanner.css'; 


export default function SkillsSection() {
  const sectionRef = useRef(null);

  return (
    <div className='skill-marquee mx-0'>
      <div
        ref={sectionRef}
        className="rounded-lg shadow-md text-center"
      >
        {/* <h2 className="text-xl md:text-2xl font-bold">Scroll to See My Skills</h2> */}
      </div>

      {/* Ribbon appears directly below this when sectionRef is in view */}
      <SkillView anchorRef={sectionRef} />
    </div>
  );
}

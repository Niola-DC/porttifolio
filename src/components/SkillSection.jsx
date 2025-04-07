import React, { useRef } from 'react';
import SkillView from './SkillView';

export default function SkillsSection() {
  const sectionRef = useRef(null);

  return (
    <div>
      <div
        ref={sectionRef}
        className="p-8 bg-blue-100 rounded-lg shadow-md text-center"
      >
        <h2 className="text-xl md:text-2xl font-bold">Scroll to See My Skills</h2>
      </div>

      {/* Ribbon appears directly below this when sectionRef is in view */}
      <SkillView anchorRef={sectionRef} />
    </div>
  );
}

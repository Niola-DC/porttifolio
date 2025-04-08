import React, { useEffect, useState } from 'react';
import '../core/MarqueeBanner.css';
import {
  LayoutIcon,         // Frontend Development
  DatabaseIcon,       // Backend Development
  FileTextIcon,       // Technical Writing
  BookOpenIcon,       // Tutoring
  PuzzleIcon,         // Strategy Formulation
  PenToolIcon         // Designing
} from 'lucide-react';

const skills = [
  { label: 'Frontend Development', icon: <LayoutIcon className="inline w-5 h-5 mr-2" /> },
  { label: 'Backend Development', icon: <DatabaseIcon className="inline w-5 h-5 mr-2" /> },
  { label: 'Technical Writing', icon: <FileTextIcon className="inline w-5 h-5 mr-2" /> },
  { label: 'Tutoring', icon: <BookOpenIcon className="inline w-5 h-5 mr-2" /> },
  { label: 'Strategy Formulation', icon: <PuzzleIcon className="inline w-5 h-5 mr-2" /> },
  { label: 'Designing', icon: <PenToolIcon className="inline w-5 h-5 mr-2" /> }
];

export default function SkillView({ anchorRef }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!anchorRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    observer.observe(anchorRef.current);

    return () => {
      if (anchorRef.current) observer.unobserve(anchorRef.current);
    };
  }, [anchorRef]);

  return (
    <div
      className={` px-12
        transition-all duration-1000 bg-green-600 ease-linear overflow-hidden w-full 
        ${inView ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
      `}
      style={{ height: inView ? '125px' : '0px' }}
    >
      <div className="bg-green-600 h-full flex items-center">
        <div className="whitespace-nowrap text-white text-sm md:text-base font-semibold skill-marquee">
          {skills.map((skill, idx) => (
            <span key={idx} className="mx-6 inline-flex items-center text-xl">
              {skill.icon}
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

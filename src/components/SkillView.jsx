import React, { useRef, useState, useEffect } from 'react';

const skills = [
  'JavaScript', 'React', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB',
  'PostgreSQL', 'TypeScript', 'HTML5', 'CSS3', 'Git', 'GitHub', 'Jest',
  'Next.js', 'Spring Boot', 'Java', 'Python'
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
      className={`transition-transform duration-700 ease-in-out overflow-hidden w-full 
        ${inView ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="bg-gray-900 py-3 overflow-hidden">
        <div className="whitespace-nowrap slideInRight text-white text-sm md:text-base font-semibold">
          {skills.map((skill, idx) => (
            <span key={idx} className="mx-4 inline-block">
              🚀 {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

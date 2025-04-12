// import React, { useRef, useEffect, useState } from "react";

// export default function VideoBox({ src, poster }) {
//   const videoRef = useRef(null);
//   const [loading, setLoading] = useState(true);
//   const [dots, setDots] = useState(".");

//   // Animate the dots: " . " -> " .. " -> " ... " -> " . "
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDots((prev) => (prev.length < 3 ? prev + "." : "."));
//     }, 500);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           videoRef.current.play();
//         } else {
//           videoRef.current.pause();
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => {
//       if (videoRef.current) {
//         observer.unobserve(videoRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="relative w-full">
//       {loading && (
//         <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-lg font-bold">
//           Video incoming{dots}
//         </div>
//       )}

//       <video
//         ref={videoRef}
//         src={src}
//         poster={poster}
//         className="w-full h-full object-cover"
//         muted
//         playsInline
//         onLoadedData={() => setLoading(false)} // Hide loading indicator when video loads
//       />
//     </div>
//   );
// }



















// import React, { useRef, useEffect } from "react";

// export default function VideoBox({ src, poster }) {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           videoRef.current.play();
//         } else {
//           videoRef.current.pause();
//         }
//       },
//       { threshold: 0.5 } 
//     );

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => {
//       if (videoRef.current) {
//         observer.unobserve(videoRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="w-full">
//       <video
//         ref={videoRef}
//         src={src}
//         poster={poster}
//         className="w-full h-full object-cover"
//         muted
//         playsInline
//       />
//     </div>
//   );
// }










import React, { useRef, useEffect, useState } from "react";

export default function VideoBox({ src, poster }) {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [dots, setDots] = useState(".");

  // Animate the dots: " . " -> " .. " -> " ... " -> " . "
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Handle intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Loading message (covers only the video area) */}
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 text-white text-lg font-bold">
          Video incoming{dots}
        </div>
      )}

      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        muted
        playsInline
        loop
        onLoadedData={() => setLoading(false)} 
      />
    </div>
  );
}

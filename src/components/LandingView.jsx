import React, { useState } from 'react';
import MarqueeBanner from '../core/MarqueeBannner';

const LandingView = () => {
    const content = (
        <>
            <span className="mx-2">ADVERTISING</span>
            <span className="mx-2">•</span>
            <span className="mx-2">SOCIAL MEDIA</span>
            <span className="mx-2">•</span>
            <span className="mx-2">COMMUNICATIONS</span>
            <span className="mx-2">•</span>
            <span className="mx-2">EXPERIENCE DESIGN</span>
            <span className="mx-2">•</span>
            <span className="mx-2">DREAMER</span>
            <span className="mx-2">•</span>
            <span className="mx-2">STRATEGY</span>
            <span className="mx-2">•</span>
            <span className="mx-2">BRANDING</span>
            <span className="mx-2">•</span>
            <span className="mx-2">WEB DESIGN</span>
            <span className="mx-2">•</span>
        </>
    );

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="relative min-h-screen bg-black overflow-hidden">

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Left side - sidebar & controls */}
                <div className="bg-black fixed left-0 top-0 bottom-0 w-14 lg:flex md:flex flex-col justify-between z-10 border-r border-gray-800 hidden">
                    <div className="flex flex-col items-center">
                        <div className="transform -rotate-90 origin-center mt-18">
                            <span className="text-2xl md:text-3xl font-bold tracking-wider text-white">ENIOLA</span>
                        </div>
                    </div>


                    {/* Menu icon */}
                    <button className="mb-auto ml-4 mt-30" onClick={toggleMenu}>

                        {/* <div > */}
                        <div className="flex flex-col space-y-1.5">
                            <div className="w-6 h-1 bg-white rounded-full"></div>
                            <div className="w-6 h-1 bg-white rounded-full"></div>
                            <div className="w-6 h-1 bg-white rounded-full"></div>
                        </div>
                        {/* </div> */}
                    </button>

                    {/* Enquiries text and phone number */}
                    <div className="transform -rotate-90 origin-left mb-2 ml-2">
                        <div className="flex flex-col text-white space-y-1">
                            <span className="text-xs text-bold uppercase tracking-wider mt-10 text-gray-400">Enquiries</span>
                            <span className="font-bold w-40">+234 8024 143 594</span>
                        </div>
                    </div>

                    {/* Circular icon at bottom */}
                    <div className="mb-4 ml-2">
                        <div className="w-12 h-12 rounded-full border-2 border-green-600 flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full m-1"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full m-1"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full m-1"></div>
                        </div>
                    </div>
                </div>
                {/* Menu icon */}
                <div className="flex  lg:hidden">

                    <button className="mb-auto ml-4 mt-20" onClick={toggleMenu}>

                        <div className="flex flex-col space-y-1.5">
                            <div className="w-6 h-1 bg-white rounded-full"></div>
                            <div className="w-6 h-1 bg-white rounded-full"></div>
                            <div className="w-6 h-1 bg-white rounded-full"></div>
                        </div>
                    </button>
                </div>

                {/* Center Content */}
                <div className="w-full lg:w-3/4 lg:ml-16 flex items-center justify-center relative overflow-hidden p-4 lg:mt-auto mt-4">
                    <div className="container mx-auto">
                        {/* Main Heading */}
                        <div
                            className=" z-10 flex flex-col my-4 sm:my-8 lg:my-10 lg:mx-0 lg:mt-0 text-center"
                            style={{
                                animation: "slideInRight 2s ease-out",
                            }}
                        >
                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-tight mb-4 sm:mb-6 text-center">
                                SOFTWARE ENGINEER<br />WEB DEVELOPER
                            </h1>

                            {/* Subtext */}
                            <div className="text-white max-w-lg ml-auto ">
                                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                                    Software Engineer <span className="text-white font-medium">focused on</span> creating <span className="text-white font-medium">beautiful websites</span> for businesses that want more than just a website—they want an experience.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Colorful Wavy Border Effect */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full h-full">
                        <div className="absolute right-0 top-0 w-3/4 h-full overflow-hidden">
                            <div className="absolute inset-0 blur-xl">
                                <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="gradient" gradientTransform="rotate(45)">
                                            <stop offset="0%" stopColor="#ff00ff" />
                                            <stop offset="25%" stopColor="#00ffff" />
                                            <stop offset="50%" stopColor="#ffff00" />
                                            <stop offset="75%" stopColor="#ff00aa" />
                                            <stop offset="100%" stopColor="#00ff00" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M300,150 C400,50 500,100 550,200 C600,300 550,400 450,450 C350,500 250,450 200,350 C150,250 200,150 300,150 Z"
                                        fill="none"
                                        stroke="url(#gradient)"
                                        strokeWidth="20"
                                        opacity="0.7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Scrolling Banner */}
            {/* <div className="w-full bg-green-500 text-black py-2 overflow-hidden whitespace-nowrap">
                <div className="animate-marquee inline-block">
                    <span className="mx-2">ADVERTISING</span>
                    <span className="mx-2">•</span>
                    <span className="mx-2">SOCIAL MEDIA</span>
                    <span className="mx-2">•</span>
                    <span className="mx-2">COMMUNICATIONS</span>
                    <span className="mx-2">•</span>
                    <span className="mx-2">EXPERIENCE DESIGN</span>
                    <span className="mx-2">•</span>
                    <span className="mx-2">DREAMER</span>
                    <span className="mx-2">•</span>
                    <span className="mx-2">STRATEGY</span>
                    <span className="mx-2">•</span>
                    <span className="mx-2">BRANDING</span>
                    <span className="mx-2">•</span>
                    <span className="mx-2">WEB DESIGN</span>
                    <span className="mx-2">•</span>
                    <span className="mx-2">ADVERTISING</span>
                    <span className="mx-2">•</span>
                    <span className="mx-2">SOCIAL MEDIA</span>
                    <span className="mx-2">•</span>
                </div>
            </div> */}
            <MarqueeBanner content={content} />
        </div>
    );
};

export default LandingView;
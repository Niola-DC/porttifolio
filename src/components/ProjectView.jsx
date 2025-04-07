import React from 'react';

const ProjectView = () => {
    return (
        <div className="bg-white text-black min-h-screen lg:mx-2">
            {/* Main content */}
            <div className="p-6 md:p-12 mx-6">
                <main>
                    

                    {/* First section */}
                    <section className="min-h-[50vh] flex flex-col md:flex-row justify-center items-start mb-12">
                        <div className="w-full md:w-1/2 mb-8 md:mb-0">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            VISUALS THAT<br />
                                 TELL A GREAT<br />
                                 STORY
                            </h3>
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col justify-between">
                            <div className="mb-8">
                                <p className="text-lg mb-6">
                                    Inspired by art, culture, and the pulse of what's next—we design websites that do more than just look good. They disrupt, captivate, and turn brands into digital icons.
                                </p>

                                <div className="relative inline-block group">
                                    <div className="border border-black rounded-full py-3 px-6 flex items-center justify-between">
                                        <span className="mr-4">Web Design</span>
                                        <span className="w-4 h-4 flex items-center justify-center">↗</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Second section */}
                    <section className="min-h-[50vh] flex flex-col md:flex-row justify-center items-start mt-12">
                        <div className="w-full md:w-1/2 mb-8 md:mb-0">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            SMART CODE<br />
                                THAT<br />
                                SPEAKS VOLUME
                            </h3>
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col justify-between">
                            <div className="mb-8">
                                <p className="text-lg mb-6">
                                I bring fresh ideas to the table and power them with cutting-edge tech—turning animations and interactivity into smooth, seamless experiences. My builds are slick, responsive, and lightning-fast—no compromise on performance.
                                </p>

                                <div className="relative inline-block group">
                                    <div className="border border-black rounded-full py-3 px-6 flex items-center justify-between">
                                        <span className="mr-4">Development</span>
                                        <span className="w-4 h-4 flex items-center justify-center">↗</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            {/* Back to top button */}
            {/* <div className="fixed bottom-8 right-8 z-10">
                <button className="bg-black border border-gray-700 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-xl">↑</span>
                </button>
            </div> */}
        </div>
    );
};

export default ProjectView;
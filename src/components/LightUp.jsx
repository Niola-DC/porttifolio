const LightUp = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            {/* Main content */}
            <div className="p-6 md:p-12">
                <main>
                    <div className="flex-grow flex items-center justify-center mt-12 md:mt-16 lg:mt-20 mb-10">
                        <div className="text-center max-w-4xl px-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight hover:text-white transition-colors duration-300 ease-in-out">
                                Eniola Fanegan is an independent software developer, builder, and creative problem solver. I craft intuitive digital experiences and help ideas come to life through clean code, thoughtful design, and tech that works.
                            </h1>
                        </div>

                    </div>
                    <div>
                        <div class="flex p-4 space-x-4 items-center justify-center mt-12 mb:10">
                            <button class="border border-current text-white px-4 py-2 text-sm rounded-2xl hover:bg-green-500 transition duration-300">
                                See My Works
                            </button>
                            <button class="border border-current text-white px-4 py-2 text-sm rounded-2xl hover:bg-green-500 transition duration-300">
                                Learn More
                            </button>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}
export default LightUp;
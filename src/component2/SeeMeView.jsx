import LayoutFlor from "./LayoutFlor";

export default function SeeMeView() {
  return (
    <LayoutFlor showVideo={false}>
      <div className="w-full px-6 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-8 mb-12">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="md:w-1/2">
            <div className="aspect-square bg-gray-800 mb-4">
              {/* Profile image placeholder */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500">Profile Image</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Eniola</h2>
            <p className="text-lg mb-6">
              I'm a creative designer with a passion for digital branding and user experiences.
              With over X years of experience, I help brands find their unique voice and aesthetic
              in the digital landscape.
            </p>
            
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <ul className="grid grid-cols-2 gap-2 mb-6">
              <li>Brand Identity</li>
              <li>UI/UX Design</li>
              <li>Web Development</li>
              <li>Motion Graphics</li>
              <li>Digital Strategy</li>
              <li>Content Creation</li>
            </ul>
            
            <button className="border border-white rounded-full px-6 py-3 text-sm hover:bg-white hover:text-black transition-colors">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </LayoutFlor>
  );
}
import LayoutFlor from "./LayoutFlor";

export default function WorkView() {
  return (
    <LayoutFlor>
      <div className="w-full px-6 pt-24 pb-12 bg-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-8 mb-12">Our Work</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Project Item 1 */}
          <div className="project-item">
            <div className="aspect-video bg-gray-800 mb-4">
              {/* Project image placeholder */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Project Title</h3>
            <p className="text-gray-400">Brand Identity, Web Design</p>
          </div>

          {/* Project Item 2 */}
          <div className="project-item">
            <div className="aspect-video bg-gray-800 mb-4">
              {/* Project image placeholder */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Project Title</h3>
            <p className="text-gray-400">Digital Marketing, UX Design</p>
          </div>

          {/* Add more projects as needed */}
        </div>
      </div>
    </LayoutFlor>
  );
}
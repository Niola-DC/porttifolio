export default function Menu({ isOpen, onClose }) {
  return (
    <div
      className={`mx-2 fixed inset-0 transition-all duration-500 overflow-hidden pointer-events-none ${
        isOpen ? 'pointer-events-auto' : ''
      }`}
    >
      {/* Menu container - slides from top */}
      <div
        className={`absolute inset-x-0 top-0 w-full lg:w-2/5 md:w-1/2 bg-black rounded-2xl flex flex-col justify-center p-8 shadow-2xl transition-transform duration-500 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{
          height: '95vh',
        }}
      >
        <div className="absolute top-6 left-6 pt-1">
          {/* <button
            onClick={onClose}
            className="border border-white rounded-full px-4 py-1 text-sm hover:bg-white hover:text-black transition-colors"
          >
            Close
          </button> */}
        </div>

        <nav className="text-4xl md:text-5xl lg:text-6xl space-y-4 font-serif">
          <div className="flex items-baseline">
            <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
            <span className="text-lg ml-2 mt-1 align-top">01</span>
          </div>
          <div className="flex items-baseline">
            <span className="mx-2">/</span>
            <a href="/work" className="hover:text-gray-300 transition-colors">Work</a>
            <span className="text-lg ml-2 mt-1 align-top">02</span>
          </div>
          <div className="flex items-baseline">
            <span className="mx-2">/</span>
            <a href="/services" className="hover:text-gray-300 transition-colors">Services</a>
            <span className="text-lg ml-2 mt-1 align-top">03</span>
          </div>
          <div className="flex items-baseline">
            <span className="mx-2">/</span>
            <a href="/about" className="hover:text-gray-300 transition-colors">About</a>
            <span className="text-lg ml-2 mt-1 align-top">04</span>
          </div>
          <div className="flex items-baseline">
            <span className="mx-2">/</span>
            <a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a>
            <span className="text-lg ml-2 mt-1 align-top">05</span>
          </div>
        </nav>
      </div>
    </div>
  );
}
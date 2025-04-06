{/* Header */}
<header className="w-full bg-gray-900 px-4 md:px-8 py-6">
<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
  {/* Logo */}
  <div className="mb-4 md:mb-0">
    <div className="flex items-center">
      <div className="w-14 h-14 relative">
        <div className="w-12 h-12 border-2 border-white rounded-full absolute"></div>
        <div className="w-12 h-12 border-2 border-white rounded-full absolute left-2"></div>
      </div>
    </div>
  </div>
  
  {/* Navigation */}
  <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
    <a href="#" className="px-4 py-2 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors">
      FEATURED WORK
    </a>
    <a href="#" className="px-4 py-2 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors">
      ABOUT
    </a>
    <a href="#" className="px-4 py-2 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors">
      MOOD SWINGS
    </a>
    <a href="#" className="px-4 py-2 border border-gray-700 rounded-full hover:bg-gray-800 transition-colors">
      CONTACT
    </a>
  </nav>
</div>
</header>
import React from 'react';
import { Github, Instagram, Linkedin, Twitter, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactView = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      {/* Main Content */}
      <main className="lg:flex-grow container mx-auto px-4 md:px-8 py-16 lg:pl-14">
        <div className="text-center md:text-left">
          <h1 className="text-8xl md:text-9xl font-bold tracking-tighter lg:mb-8">Say hi!</h1>
          <div className="h-px w-full bg-gray-700 my-8"></div>
        </div>
        <div className="w-full md:w-auto ">
            <form className="flex flex-col space-y-2 lg:hidden py-8">
              <input 
                type="email" 
                placeholder="YOUR EMAIL HERE :)"
                className="bg-transparent border border-gray-600 rounded-full px-6 py-4 w-full md:w-80 mt-2"
              />
              <button 
                type="submit" 
                className="bg-transparent border border-gray-600 rounded-full px-6 py-4 hover:bg-gray-800 transition-colors my-2"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
      </main>
      
      {/* Footer */}
      <footer className="container mx-auto px-4 md:px-8 py-8 ">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mx-10">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <Link to="https://www.instagram.com/callme.ennie/" className="text-white hover:text-gray-300" aria-label="Instagram">
              <Instagram size={28} />
            </Link>
            <Link to="https://www.linkedin.com/in/eniola-c-fanegan-a50996234/" className="text-white hover:text-gray-300" aria-label="LinkedIn">
              <Linkedin size={28} />
            </Link>
            <Link to='https://github.com/Niola-DC' className="text-white hover:text-gray-300" aria-label="GitHub">
                <Github size={28} />
            </Link>
            <Link to='https://x.com/eniola_merem' className="text-white hover:text-gray-300" aria-label="X">
                <Twitter size={28} />
            </Link>
          </div>
          
          {/* Subscribe Form */}
          <div className="w-full md:w-auto hidden lg:block">
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="YOUR EMAIL HERE :)"
                className="bg-transparent border border-gray-600 rounded-full px-6 py-3 w-full md:w-80"
              />
              <button 
                type="submit" 
                className="bg-transparent border border-gray-600 rounded-full px-6 py-3 hover:bg-gray-800 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 mx-10">
          <p className="text-gray-400">ENIOLA C</p>

        </div>
      </footer>
    </div>
  );
};

export default ContactView;

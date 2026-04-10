import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
            Second Chance Employment
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-primary-600 transition-colors duration-300 py-2" scroll-smooth>
              About
            </a>
            <a href="#programs" className="hover:text-primary-600 transition-colors duration-300 py-2" scroll-smooth>
              Programs
            </a>
            <a href="#impact" className="hover:text-primary-600 transition-colors duration-300 py-2" scroll-smooth>
              Impact
            </a>
            <a href="#team" className="hover:text-primary-600 transition-colors duration-300 py-2" scroll-smooth>
              Team
            </a>
            <a href="#booking" className="hover:text-primary-600 transition-colors duration-300 py-2" scroll-smooth>
              Booking
            </a>
            <a href="#reviews" className="hover:text-primary-600 transition-colors duration-300 py-2" scroll-smooth>
              Reviews
            </a>
          </div>
          <a href="#booking" className="bg-accent-orange-500 hover:bg-accent-orange-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 scroll-smooth" scroll-smooth>
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


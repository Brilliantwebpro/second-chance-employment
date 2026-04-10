import { useEffect, useState } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Impact', href: '#impact' },
  { label: 'Team', href: '#team' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Booking', href: '#booking' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <a
            href="#"
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-accent-500 bg-clip-text text-transparent"
            aria-label="NDIS Learning Hub"
          >
            NDIS Learning Hub
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-primary-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="bg-accent-orange-500 hover:bg-accent-orange-600 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Book Now
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white/80 shadow-sm"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="w-5 space-y-1.5">
              <span
                className={`block h-0.5 rounded bg-gray-700 transition-transform duration-300 ${
                  isMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 rounded bg-gray-700 transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 rounded bg-gray-700 transition-transform duration-300 ${
                  isMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-3 text-gray-700 font-semibold">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block hover:text-primary-600 transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                className="block text-center bg-accent-orange-500 hover:bg-accent-orange-600 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={closeMenu}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';

const Header = () => {
  const { language, changeLanguage, t, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', to: 'hero' },
    { key: 'services', to: 'criminal-services' },
    { key: 'expertise', to: 'expertise' },
    { key: 'profile', to: 'office-profile' },
    { key: 'contact', to: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-primary/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
              <span className="text-dark-primary font-bold text-xl">AA</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-white font-bold text-lg">Abdulaziz Alablam</h1>
              <p className="text-gold text-sm">Legal Consultants</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white hover:text-gold transition-colors duration-300 cursor-pointer font-medium"
              >
                {t(`navigation.${item.key}`)}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={() => changeLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center space-x-2 bg-gold/20 hover:bg-gold/30 text-gold px-4 py-2 rounded-lg transition-all duration-300"
            >
              <FaGlobe />
              <span className="text-gold font-medium">
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-gold transition-colors duration-300"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-dark-primary/95 backdrop-blur-md border-t border-gold/20">
            <div className="container-custom py-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-white hover:text-gold transition-colors duration-300 cursor-pointer font-medium border-b border-gold/10"
                >
                  {t(`navigation.${item.key}`)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

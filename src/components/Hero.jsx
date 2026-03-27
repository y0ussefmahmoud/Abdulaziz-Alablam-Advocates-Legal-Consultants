import React from 'react';
import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';
import { FaArrowDown, FaBalanceScale } from 'react-icons/fa';

const Hero = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border-4 border-yellow-500 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border-4 border-yellow-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <FaBalanceScale size={200} className="text-yellow-500 opacity-20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block mb-2">{t('hero.title')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="criminal-services"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              {t('hero.cta')}
              <FaArrowDown className={`inline-block ml-2 group-hover:translate-y-1 transition-transform duration-300 ${isRTL ? 'mr-2 ml-0' : ''}`} />
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <FaArrowDown className="text-yellow-500 text-2xl" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
    </section>
  );
};

export default Hero;

import React, { useState } from 'react';
import { useLanguage } from '../contexts/CompleteLanguageContext';

const CompleteNavigation = () => {
  const { language, toggleLanguage, t, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoUrl = "https://lh3.googleusercontent.com/aida/ADBb0ug2d98s1M2O9BNNHaB4HFQxsb0Bf45yNcS7CJFQmyCmp3hX2lYaQejvENxNFv2ne7xeHZtompXveeH0d2PoaB3MoAk-0FVibMT8W92QMiK-yHmhIozdJ8VC7kSZp4kqOUQiv0NDbvKb1vC02wJschycLZB9Z5QOvUlmEUng1xu79R561GfbAav2el5BHRA1n0fJzSZYCRNDzrZjbMaFGuryEiad0NNc69QiL_wqGPRjstW2Zmbyc_TZZAvoUGxXRHviMHtikVzTyw";

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-white/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <div className="flex items-center gap-4">
          <img 
            alt="Abdulaziz Alablam Logo" 
            className="h-14 w-auto object-contain" 
            src={logoUrl}
          />
          <div className="hidden sm:block text-lg font-bold text-white font-headline leading-tight">
            {language === 'ar' ? (
              <>
                عبدالعزيز الأبلم<br/>
                <span className="text-primary text-xs font-normal">للمحاماة والاستشارات القانونية</span>
              </>
            ) : (
              <>
                <span className="text-lg font-bold">Abdulaziz Al-Ablam</span><br/>
                <span className="text-[10px] uppercase tracking-widest text-primary font-sans font-semibold">Advocates & Legal Consultants</span>
              </>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {Object.entries(t('nav')).map(([key, value]) => (
            <a
              key={key}
              href={`#${key === 'home' ? 'home' : key}`}
              className={`${
                key === 'home' 
                  ? 'text-primary font-semibold border-b border-primary pb-1' 
                  : 'text-white/80 hover:text-primary transition-colors text-sm font-medium'
              }`}
            >
              {value}
            </a>
          ))}
        </div>

        {/* Language Switcher */}
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary hover:text-background transition-all"
        >
          <span className="material-symbols-outlined text-sm">language</span>
          <span className="text-xs font-bold tracking-widest">AR/EN</span>
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-white/10">
          <div className="px-6 py-4 space-y-4">
            {Object.entries(t('nav')).map(([key, value]) => (
              <a
                key={key}
                href={`#${key === 'home' ? 'home' : key}`}
                className="block text-white/80 hover:text-primary transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {value}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default CompleteNavigation;

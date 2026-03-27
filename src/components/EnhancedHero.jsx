import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';

const EnhancedHero = () => {
  const { t, isRTL, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    ar: {
      title: 'عبدالعزيز الأبلم',
      subtitle: 'للمحاماة والاستشارات القانونية',
      description: 'ضابط شرطة سابق في دبي، رئيس نيابة سابق، ومحامٍ ممارس بخبرة عميقة في القضايا الجنائية والمدنية. نقدم الحماية القانونية التي تستحقها.',
      badge: 'خبرة قانونية تتجاوز 20 عاماً',
      cta1: 'طلب استشارة قانونية',
      cta2: 'استكشف خدماتنا',
      nav: {
        home: 'الرئيسية',
        services: 'الخدمات',
        expertise: 'الخبرات',
        about: 'عن المكتب',
        contact: 'اتصل بنا'
      }
    },
    en: {
      title: 'Abdulaziz Al-Ablam',
      subtitle: 'Lawyers & Legal Consultants',
      description: 'Former Dubai Police Officer, Former Chief Prosecutor, and practicing lawyer with deep expertise in criminal and civil cases. We provide the legal protection you deserve.',
      badge: 'Over 20 Years of Legal Expertise',
      cta1: 'Request a Consultation',
      cta2: 'Explore Our Services',
      nav: {
        home: 'Home',
        services: 'Services',
        expertise: 'Expertise',
        about: 'About',
        contact: 'Contact Us'
      }
    }
  };

  const currentLang = translations[language];

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <div className="text-xl font-bold text-slate-900 font-serif">
            {currentLang.title}
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link 
              to="home" 
              spy={true} 
              smooth={true} 
              className="text-amber-600 border-b-2 border-amber-400 pb-1 font-serif font-semibold tracking-wide"
            >
              {currentLang.nav.home}
            </Link>
            <Link 
              to="services" 
              spy={true} 
              smooth={true} 
              className="text-slate-600 hover:text-amber-600 transition-colors font-serif font-semibold tracking-wide"
            >
              {currentLang.nav.services}
            </Link>
            <Link 
              to="expertise" 
              spy={true} 
              smooth={true} 
              className="text-slate-600 hover:text-amber-600 transition-colors font-serif font-semibold tracking-wide"
            >
              {currentLang.nav.expertise}
            </Link>
            <Link 
              to="about" 
              spy={true} 
              smooth={true} 
              className="text-slate-600 hover:text-amber-600 transition-colors font-serif font-semibold tracking-wide"
            >
              {currentLang.nav.about}
            </Link>
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              className="text-slate-600 hover:text-amber-600 transition-colors font-serif font-semibold tracking-wide"
            >
              {currentLang.nav.contact}
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                const newLang = language === 'ar' ? 'en' : 'ar';
                localStorage.setItem('language', newLang);
                window.location.reload();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-slate-700 hover:bg-amber-100 transition-all duration-300"
            >
              <span className="text-2xl">🌐</span>
              <span className="font-medium">
                {language === 'ar' ? 'AR/EN' : 'EN/AR'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-8 py-4 space-y-4">
              <Link to="home" spy={true} smooth={true} className="block text-amber-600 font-serif font-semibold">
                {currentLang.nav.home}
              </Link>
              <Link to="services" spy={true} smooth={true} className="block text-slate-600 font-serif font-semibold">
                {currentLang.nav.services}
              </Link>
              <Link to="expertise" spy={true} smooth={true} className="block text-slate-600 font-serif font-semibold">
                {currentLang.nav.expertise}
              </Link>
              <Link to="about" spy={true} smooth={true} className="block text-slate-600 font-serif font-semibold">
                {currentLang.nav.about}
              </Link>
              <Link to="contact" spy={true} smooth={true} className="block text-slate-600 font-serif font-semibold">
                {currentLang.nav.contact}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)'
        }}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAcmZoKcBE_ACH1RqZOj2_wtOs9sfWX8clguEHEJjJmSim8Evc2j3sw1pxdpBnZvNPygRQuM7d7yVix2atvhPo0pJHHck-pEzX9KVjxVPMzbUmJEZYS5Wjqw4Co8ceip7GMRaBAvSTn4uhfJ_ttmPaDCM7fMJQx4jvjspVwFYfBNUfBFBTNUezdUNRaExn7iVXAInYsXFGF9uc0vK8AELn2BeEF8ne2GIH6w8uIwiEccr-a3TKwWqOj2DHMOi7pKA0ZGoMDxA3UkAC_)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="max-w-7xl mx-auto px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-200 border border-amber-400/30 text-sm font-medium">
              {currentLang.badge}
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-serif font-bold">
              {currentLang.title} <br />
              <span className="text-amber-200">{currentLang.subtitle}</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
              {currentLang.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                className="px-8 py-4 bg-amber-500 text-white rounded-lg font-bold flex items-center gap-3 hover:bg-amber-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                {currentLang.cta1}
                <span>⚖️</span>
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                className="px-8 py-4 border border-gray-400 text-white rounded-lg font-bold hover:bg-white/10 transition-all duration-300"
              >
                {currentLang.cta2}
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative hidden lg:block">
            <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl transform rotate-2">
              <img 
                alt="Abdulaziz Al-Ablam Professional Portrait"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtbt_2w8cDF1p_zYrU1M7H3lOT1HZjh56oD5HmVClAUXk0p9NIu659ipWfyVwfpNGAklodl3ucTQZSontoRRuyMetPpP3_KxY_k_rSALDR-P-d3XtKIjYopHCJXG_jlQpZq59CsYXTOy3Ag3HO66J__Et5QSIyFCKHbtLY_BzDeOMkEZ4XWSh6iL3xMHULNtm1EoZvv4q5OXLtxiimPsRfLDCzpI0OTLywXO-DFZxNCSIN4zwywCSWxwDYB878OnZjk0zrhm1Dc43o"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-400 rounded-2xl -z-10 transform -rotate-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnhancedHero;

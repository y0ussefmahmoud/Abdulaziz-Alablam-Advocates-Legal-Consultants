import React, { useState } from 'react';

function SimpleApp() {
  const [language, setLanguage] = useState('ar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    ar: {
      title: 'عبدالعزيز الأبلم',
      subtitle: 'للمحاماة والاستشارات القانونية',
      description: 'ضابط شرطة سابق في دبي، رئيس نيابة سابق، ومحامٍ ممارس بخبرة عميقة في القضايا الجنائية والمدنية.',
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
      description: 'Former Dubai Police Officer, Former Chief Prosecutor, and practicing lawyer with deep expertise in criminal and civil cases.',
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
  const isRTL = language === 'ar';

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <div className="min-h-screen" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <div className="text-xl font-bold text-gray-900" style={{ fontFamily: 'serif' }}>
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Alablam Logo" 
                className="h-10 w-auto object-contain"
                style={{ maxHeight: '40px' }}
                onError={(e) => {
                  console.log('Logo failed to load, using fallback');
                  e.target.src = 'https://i.ibb.co/7bQ2GqM/logo-01.png';
                }}
              />
              {currentLang.title}
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {['home', 'services', 'expertise', 'about', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-gray-600 hover:text-amber-600 transition-colors font-semibold"
                style={{ fontFamily: 'serif' }}
              >
                {currentLang.nav[section]}
              </a>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-amber-100 transition-all"
            >
              <span>🌐</span>
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
              {['home', 'services', 'expertise', 'about', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="block text-gray-600 font-semibold"
                  style={{ fontFamily: 'serif' }}
                >
                  {currentLang.nav[section]}
                </a>
              ))}
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3)',
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-bold" style={{ fontFamily: 'serif' }}>
              {currentLang.title} <br />
              <span className="text-amber-200">{currentLang.subtitle}</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
              {currentLang.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-amber-500 text-white rounded-lg font-bold flex items-center gap-3 hover:bg-amber-400 transition-all transform hover:-translate-y-1"
              >
                {currentLang.cta1}
                <span>⚖️</span>
              </a>
              <a
                href="#services"
                className="px-8 py-4 border border-gray-400 text-white rounded-lg font-bold hover:bg-white/10 transition-all"
              >
                {currentLang.cta2}
              </a>
            </div>
          </div>

          {/* Right Side - Placeholder */}
          <div className="relative hidden lg:block">
            <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl transform rotate-2 bg-gray-700 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">👨‍⚖️</div>
                <p className="text-xl">Professional Portrait</p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500 rounded-2xl -z-10 transform -rotate-6"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-amber-600 font-bold tracking-widest text-sm uppercase">
              {language === 'ar' ? 'منهجية العمل' : 'Our Methodology'}
            </span>
            <h2 className="text-4xl font-bold text-gray-800" style={{ fontFamily: 'serif' }}>
              {language === 'ar' ? 'الخدمات الجنائية المتخصصة' : 'Specialized Criminal Defense'}
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🛡️',
                title: language === 'ar' ? 'الدفاع في التحقيقات' : 'Investigation Defense',
                description: language === 'ar' ? 'التمثيل القانوني منذ اللحظة الأولى في مراكز الشرطة والنيابة العامة' : 'Legal representation from first moment at police stations and Public Prosecution'
              },
              {
                icon: '⚖️',
                title: language === 'ar' ? 'المرافعة الجنائية' : 'Criminal Litigation',
                description: language === 'ar' ? 'إعداد المذكرات القانونية والمرافعة الشفهية أمام المحاكم' : 'Preparing legal briefs and providing oral arguments before Courts'
              },
              {
                icon: '📚',
                title: language === 'ar' ? 'النقض والاستئناف' : 'Cassation & Appeal',
                description: language === 'ar' ? 'دراسة الأحكام وتقديم طعون الاستئناف والنقض' : 'Studying judgments and filing appeals and cassation petitions'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="p-8 bg-white rounded-xl shadow-sm border-t-4 border-amber-500 transition-all hover:shadow-lg hover:-translate-y-2"
              >
                <div className="text-5xl text-amber-500 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'serif' }}>
              {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'فريقنا القانوني جاهز لاستقبال استفساراتكم' : 'Our legal team is ready to receive your inquiries'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl text-amber-500 mb-4">📞</div>
              <h3 className="font-bold text-gray-800 mb-2">
                {language === 'ar' ? 'اتصل بنا' : 'Call Us'}
              </h3>
              <p className="text-gray-600">+971 4 000 0000</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-amber-500 mb-4">✉</div>
              <h3 className="font-bold text-gray-800 mb-2">
                {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
              </h3>
              <p className="text-gray-600">info@alablam.ae</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-amber-500 mb-4">📍</div>
              <h3 className="font-bold text-gray-800 mb-2">
                {language === 'ar' ? 'الموقع' : 'Location'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar' ? 'دبي، الإمارات العربية المتحدة' : 'Dubai, UAE'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 text-lg font-bold mb-4" style={{ fontFamily: 'serif' }}>
            <img 
              src="/logo.png" 
              alt="Alablam Logo" 
              className="h-12 w-auto object-contain"
              style={{ maxHeight: '48px' }}
              onError={(e) => {
                console.log('Footer logo failed to load, using fallback');
                e.target.src = 'https://i.ibb.co/7bQ2GqM/logo-01.png';
              }}
            />
            {currentLang.title}
          </div>
          <p className="text-gray-400 mb-4">
            {language === 'ar' 
              ? 'مكتب محاماة رائد في دولة الإمارات العربية المتحدة' 
              : 'A leading law firm in United Arab Emirates'}
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 {currentLang.title} {currentLang.subtitle}. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default SimpleApp;

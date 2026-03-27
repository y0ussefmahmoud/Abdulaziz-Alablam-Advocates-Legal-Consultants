import React from 'react';
import { useLanguage } from '../contexts/AdvancedLanguageContext';

const AdvancedExpertise = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-surface" id="expertise">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">
              {t('expertise.title')}
            </h2>
            <p className="text-white/70">
              {t('expertise.subtitle')}
            </p>
          </div>
          <a 
            href="#contact"
            className="text-primary hover:text-white transition-colors flex items-center gap-2 font-bold border-b border-primary pb-1"
          >
            {t('expertise.cta')}
            <span className="material-symbols-outlined">
              {language === 'ar' ? 'arrow_left' : 'arrow_forward'}
            </span>
          </a>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t('expertise.items').map((item, index) => (
            <div 
              key={index}
              className={`${
                item.special 
                  ? 'p-8 bg-primary flex flex-col justify-center items-center text-center' 
                  : 'p-8 bg-background border-r-4 border-primary/40 hover:border-primary transition-all group'
              }`}
            >
              <h3 className={`${
                item.special 
                  ? 'text-2xl font-bold text-background mb-2' 
                  : 'text-xl font-bold mb-4 text-primary'
              }`}>
                {item.title}
              </h3>
              <p className={`${
                item.special 
                  ? 'text-background/80 font-bold mb-6' 
                  : 'text-white/60 text-sm leading-relaxed mb-4'
              }`}>
                {item.desc}
              </p>
              {item.special ? (
                <button className="bg-background text-white px-6 py-2 text-sm font-bold rounded hover:bg-black transition-colors">
                  {language === 'ar' ? 'تعرف على المزيد' : 'CONTACT US NOW'}
                </button>
              ) : (
                <span className="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors">
                  {item.icon}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedExpertise;

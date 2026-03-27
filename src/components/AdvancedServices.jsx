import React from 'react';
import { useLanguage } from '../contexts/AdvancedLanguageContext';

const AdvancedServices = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-headline font-bold text-primary mb-6">
            {t('services.title')}
          </h2>
          <p className="text-white/70 text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t('services.items').map((service, index) => (
            <div 
              key={index}
              className="p-8 bg-background border border-primary/10 hover:border-primary/40 transition-all text-center group"
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </span>
              <p className="font-bold text-white">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedServices;

import React from 'react';
import { useLanguage } from '../contexts/AdvancedLanguageContext';

const AdvancedMethodology = () => {
  const { t, language } = useLanguage();

  const logoUrl = "https://lh3.googleusercontent.com/aida/ADBb0ug2d98s1M2O9BNNHaB4HFQxsb0Bf45yNcS7CJFQmyCmp3hX2lYaQejvENxNFv2ne7xeHZtompXveeH0d2PoaB3MoAk-0FVibMT8W92QMiK-yHmhIozdJ8VC7kSZp4kqOUQiv0NDbvKb1vC02wJschycLZB9Z5QOvUlmEUng1xu79R561GfbAav2el5BHRA1n0fJzSZYCRNDzrZjbMaFGuryEiad0NNc69QiL_wqGPRjstW2Zmbyc_TZZAvoUGxXRHviMHtikVzTyw";

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h2 className="text-3xl font-headline font-bold mb-6 text-primary border-r-4 border-primary pr-4">
              {t('methodology.title')}
            </h2>
            <p className="text-white/70 text-lg">
              {t('methodology.subtitle')}
            </p>
          </div>

          {/* Methodology Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t('methodology.items').map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-surface border border-white/5 hover:border-primary/30 transition-all group"
              >
                <span className="material-symbols-outlined text-primary mb-4 text-3xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Criminal Commitment Highlight */}
        <div className="bg-primary p-12 text-background">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-2/3 space-y-4">
              <h3 className="text-2xl font-headline font-bold flex items-center gap-3">
                <span className="material-symbols-outlined">security</span>
                {t('methodology.commitment.title')}
              </h3>
              <p className="text-lg leading-relaxed font-medium">
                {t('methodology.commitment.description')}
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <img 
                alt="Firm Logo" 
                className="h-40 grayscale brightness-0 opacity-80" 
                src={logoUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedMethodology;

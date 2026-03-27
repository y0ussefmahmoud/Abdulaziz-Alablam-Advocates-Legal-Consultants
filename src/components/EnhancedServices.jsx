import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const EnhancedServices = () => {
  const { language } = useLanguage();

  const translations = {
    ar: {
      title: 'الخدمات الجنائية المتخصصة',
      subtitle: 'منهجية العمل',
      methods: [
        {
          icon: '🛡️',
          title: 'الدفاع في التحقيقات',
          description: 'التمثيل القانوني منذ اللحظة الأولى في مراكز الشرطة والنيابة العامة لضمان حقوق الموكل.'
        },
        {
          icon: '⚖️',
          title: 'المرافعة الجنائية',
          description: 'إعداد المذكرات القانونية والمرافعة الشفهية أمام محاكم الجنايات والجنح بكافة درجاتها.'
        },
        {
          icon: '📚',
          title: 'النقض والاستئناف',
          description: 'دراسة الأحكام وتقديم طعون الاستئناف والنقض بناءً على ثغرات قانونية دقيقة.'
        }
      ]
    },
    en: {
      title: 'Specialized Criminal Defense',
      subtitle: 'Our Methodology',
      methods: [
        {
          icon: '🛡️',
          title: 'Investigation Defense',
          description: 'Legal representation from first moment at police stations and Public Prosecution to ensure client\'s rights.'
        },
        {
          icon: '⚖️',
          title: 'Criminal Litigation',
          description: 'Preparing legal briefs and providing oral arguments before Felony and Misdemeanor Courts at all levels.'
        },
        {
          icon: '📚',
          title: 'Cassation & Appeal',
          description: 'Studying judgments and filing appeals and cassation petitions based on precise legal loopholes.'
        }
      ]
    }
  };

  const currentLang = translations[language];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-amber-600 font-bold tracking-widest text-sm uppercase">
            {currentLang.subtitle}
          </span>
          <h2 className="text-4xl font-serif font-bold text-gray-800">
            {currentLang.title}
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        {/* Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentLang.methods.map((method, index) => (
            <div 
              key={index}
              className="p-8 bg-white rounded-xl shadow-sm border-t-4 border-amber-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-5xl text-amber-500 mb-6">
                {method.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-800">
                {method.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedServices;

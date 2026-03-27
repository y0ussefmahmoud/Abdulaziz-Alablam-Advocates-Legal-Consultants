import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaBriefcase, FaUsers, FaHome, FaFileContract, FaLightbulb, FaAward } from 'react-icons/fa';

const ExpertiseAreas = () => {
  const { t, isRTL } = useLanguage();

  const expertiseIcons = {
    "Commercial Law": FaBriefcase,
    "القانون التجاري": FaBriefcase,
    "Civil Law": FaFileContract,
    "القانون المدني": FaFileContract,
    "Family Law": FaUsers,
    "قانون الأحوال الشخصية": FaUsers,
    "Real Estate Law": FaHome,
    "القانون العقاري": FaHome,
    "Legal Consultations": FaLightbulb,
    "الاستشارات القانونية": FaLightbulb
  };

  return (
    <section id="expertise" className="py-20 bg-gradient-to-b from-dark-secondary to-dark-primary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('expertise.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            {t('expertise.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto"></div>
        </div>

        {/* Expertise Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {t('expertise.areas').map((area, index) => {
            const IconComponent = expertiseIcons[area.title] || FaBriefcase;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 rounded-2xl border border-gold/20 card-hover group"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-gold text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gold mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Legacy Section */}
        <div className="bg-gradient-to-r from-gold to-gold-dark p-1 rounded-2xl">
          <div className="bg-dark-primary p-12 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-right">
                <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaAward className="text-gold text-4xl" />
                </div>
                <h3 className="text-3xl font-bold text-gold mb-4">
                  {t('expertise.legacy.title')}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto lg:mx-auto"></div>
              </div>
              <div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {t('expertise.legacy.description')}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
                  <span className="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold">
                    23+ Years Experience
                  </span>
                  <span className="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold">
                    Expert Team
                  </span>
                  <span className="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold">
                    Proven Results
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "23+", label: isRTL ? "سنة خبرة" : "Years Experience" },
            { number: "1000+", label: isRTL ? "قضية مكتملة" : "Cases Won" },
            { number: "50+", label: isRTL ? "عميل سعيد" : "Happy Clients" },
            { number: "15+", label: isRTL ? "محامي خبير" : "Expert Lawyers" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAreas;

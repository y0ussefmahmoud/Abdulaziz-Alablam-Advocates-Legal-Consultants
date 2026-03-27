import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaShieldAlt, FaHandshake, FaSearch, FaUsers, FaGavel } from 'react-icons/fa';

const CriminalServices = () => {
  const { t, isRTL } = useLanguage();

  const methodologyIcons = {
    "Comprehensive Analysis": FaSearch,
    "تحليل شامل": FaSearch,
    "Transparent Communication": FaHandshake,
    "شفافية التواصل": FaHandshake,
    "Targeted Solutions": FaShieldAlt,
    "حلول موجهة": FaShieldAlt,
    "Dedicated Team": FaUsers,
    "فريق متفان": FaUsers
  };

  return (
    <section id="criminal-services" className="py-20 bg-gradient-to-b from-dark-secondary to-dark-primary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/20 rounded-full mb-6">
            <FaGavel className="text-gold text-3xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('criminalServices.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Services List */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 rounded-2xl border border-gold/20">
              <h3 className="text-2xl font-bold text-gold mb-6">
                {t('criminalServices.title')}
              </h3>
              <ul className="space-y-4">
                {t('criminalServices.services').map((service, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 leading-relaxed">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commitment Card */}
            <div className="bg-gradient-to-br from-dark-accent to-dark-secondary p-8 rounded-2xl border border-gold/20 card-hover">
              <h3 className="text-2xl font-bold text-gold mb-6">
                {t('criminalServices.commitment.title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('criminalServices.commitment.description')}
              </p>
            </div>
          </div>

          {/* Right Column - Methodology */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gold mb-8 text-center lg:text-right">
              {t('criminalServices.methodology.title')}
            </h3>
            
            {t('criminalServices.methodology.items').map((item, index) => {
              const IconComponent = methodologyIcons[item.title] || FaShieldAlt;
              return (
                <div key={index} className="bg-gradient-to-r from-dark-primary/50 to-dark-accent/50 p-6 rounded-xl border border-gold/20 card-hover">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-gold text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gold to-gold-dark p-1 rounded-2xl">
            <div className="bg-dark-primary p-8 rounded-2xl">
              <p className="text-xl font-semibold text-gold mb-4">
                {isRTL ? 'التزامنا الجنائي' : 'Our Criminal Commitment'}
              </p>
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {t('criminalServices.commitment.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CriminalServices;

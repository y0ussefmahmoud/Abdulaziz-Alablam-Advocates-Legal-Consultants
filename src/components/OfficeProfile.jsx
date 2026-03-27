import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaBalanceScale, FaHeart, FaUserSecret } from 'react-icons/fa';

const OfficeProfile = () => {
  const { t, isRTL } = useLanguage();

  const valueIcons = {
    "Justice": FaBalanceScale,
    "العدالة": FaBalanceScale,
    "Professionalism": FaHeart,
    "المهنية": FaHeart,
    "Confidentiality": FaUserSecret,
    "السرية": FaUserSecret
  };

  return (
    <section id="office-profile" className="py-20 bg-gradient-to-b from-dark-primary to-dark-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('officeProfile.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Logo and Title */}
          <div className="text-center lg:text-right">
            <div className="mb-8">
              {/* Logo Placeholder */}
              <div className="w-48 h-48 mx-auto lg:mx-auto bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center border-4 border-gold/30">
                <div className="text-center">
                  <FaBalanceScale className="text-gold text-6xl mb-2" />
                  <span className="text-gold font-bold text-xl">AA</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-gold mb-4">
              عبد العزيز الأبلم للمحاماة والاستشارات القانونية
            </h3>
            <p className="text-xl text-gold/80">
              Abdulaziz Alablam Advocates & Legal Consultants
            </p>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Identity & Vision */}
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 rounded-2xl border border-gold/20">
              <h3 className="text-2xl font-bold text-gold mb-4">
                {t('officeProfile.identity.title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('officeProfile.identity.description')}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-dark-accent to-dark-secondary p-8 rounded-2xl border border-gold/20">
              <h3 className="text-2xl font-bold text-gold mb-4">
                {t('officeProfile.mission.title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('officeProfile.mission.description')}
              </p>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 rounded-2xl border border-gold/20">
              <h3 className="text-2xl font-bold text-gold mb-6">
                {t('officeProfile.values.title')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t('officeProfile.values.items').map((value, index) => {
                  const IconComponent = valueIcons[value.title] || FaHeart;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="text-gold text-2xl" />
                      </div>
                      <h4 className="text-lg font-semibold text-gold mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-16 bg-gradient-to-r from-gold to-gold-dark p-1 rounded-2xl">
          <div className="bg-dark-primary p-6 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-gold font-semibold mb-2">{t('contact.info.email')}</p>
                <p className="text-gray-300">info@alablam.org</p>
              </div>
              <div>
                <p className="text-gold font-semibold mb-2">{t('contact.info.phone')}</p>
                <p className="text-gray-300">+971 4 284 5200</p>
              </div>
              <div>
                <p className="text-gold font-semibold mb-2">{t('contact.info.address')}</p>
                <p className="text-gray-300 text-sm">{t('contact.info.address')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeProfile;

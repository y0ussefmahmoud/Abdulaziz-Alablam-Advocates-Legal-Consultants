import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' }
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: t('contact.info.address'), label: 'Address' },
    { icon: FaPhone, text: t('contact.info.phone'), label: 'Phone' },
    { icon: FaEnvelope, text: t('contact.info.email'), label: 'Email' }
  ];

  return (
    <footer className="bg-dark-primary border-t border-gold/20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                <span className="text-dark-primary font-bold text-sm">AA</span>
              </div>
              <h3 className="text-white font-bold text-lg">Abdulaziz Alablam</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('officeProfile.identity.description').substring(0, 150)}...
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-gold font-semibold mb-4 text-lg">{t('contact.title')}</h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center justify-center space-x-3 text-gray-300 hover:text-gold transition-colors duration-300">
                  <item.icon className="text-gold flex-shrink-0" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h4 className="text-gold font-semibold mb-4 text-lg">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gold/20 hover:bg-gold text-gold hover:text-dark-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gold/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

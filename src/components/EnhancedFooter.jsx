import React from 'react';
import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';

const EnhancedFooter = () => {
  const { language } = useLanguage();

  const translations = {
    ar: {
      companyName: 'Abdulaziz Al-Ablam',
      description: 'مكتب محاماة رائد في دولة الإمارات العربية المتحدة، متخصص في تقديم الحلول القانونية المبتكرة والدفاع الجنائي.',
      quickLinks: {
        title: 'روابط سريعة',
        links: ['الرئيسية', 'الخدمات', 'الخبرات', 'تواصل معنا']
      },
      legal: {
        title: 'قانوني',
        links: ['سياسة الخصوصية', 'شروط الخدمة', 'إخلاء المسؤولية', 'خريطة الموقع']
      },
      businessHours: {
        title: 'ساعات العمل',
        hours: ['الإثنين - الجمعة: 9 صباحاً - 6 مساءً', 'السبت: 10 صباحاً - 2 مساءً']
      },
      downloadProfile: 'تحميل الملف الشخصي (PDF)',
      copyright: '© 2024 Abdulaziz Al-Ablam Lawyers & Legal Consultants. All Rights Reserved.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة'
    },
    en: {
      companyName: 'Abdulaziz Al-Ablam',
      description: 'A leading law firm in United Arab Emirates, specializing in innovative legal solutions and criminal defense.',
      quickLinks: {
        title: 'Quick Links',
        links: ['Home', 'Services', 'Expertise', 'Contact Us']
      },
      legal: {
        title: 'Legal',
        links: ['Privacy Policy', 'Terms of Service', 'Disclaimer', 'Sitemap']
      },
      businessHours: {
        title: 'Business Hours',
        hours: ['Monday - Friday: 9 AM - 6 PM', 'Saturday: 10 AM - 2 PM']
      },
      downloadProfile: 'Download Profile (PDF)',
      copyright: '© 2024 Abdulaziz Al-Ablam Lawyers & Legal Consultants. All Rights Reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  };

  const currentLang = translations[language];
  const sectionIds = ['home', 'services', 'expertise', 'contact'];

  return (
    <footer className="bg-gray-900 w-full py-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="text-lg font-bold text-white font-serif">
            {currentLang.companyName}
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            {currentLang.description}
          </p>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="text-gray-400 hover:text-amber-400 transition-all"
              aria-label="Share"
            >
              <span className="text-xl">📤</span>
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-amber-400 transition-all"
              aria-label="Policy"
            >
              <span className="text-xl">🛡</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-amber-400 font-bold">
            {currentLang.quickLinks.title}
          </h4>
          <ul className="space-y-2">
            {currentLang.quickLinks.links.map((link, index) => (
              <li key={index}>
                <Link
                  to={sectionIds[index]}
                  spy={true}
                  smooth={true}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div className="space-y-4">
          <h4 className="text-amber-400 font-bold">
            {currentLang.legal.title}
          </h4>
          <ul className="space-y-2">
            {currentLang.legal.links.map((link, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Hours */}
        <div className="space-y-4">
          <h4 className="text-amber-400 font-bold">
            {currentLang.businessHours.title}
          </h4>
          {currentLang.businessHours.hours.map((hour, index) => (
            <p key={index} className="text-gray-400 text-sm">
              {hour}
            </p>
          ))}
          <div className="pt-4">
            <button className="w-full py-2 px-4 rounded border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white transition-all text-sm font-bold">
              {currentLang.downloadProfile}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          {currentLang.copyright}
        </p>
        <div className="flex gap-6">
          <a 
            href="#" 
            className="text-amber-400 underline text-sm"
          >
            {currentLang.privacy}
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {currentLang.terms}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;

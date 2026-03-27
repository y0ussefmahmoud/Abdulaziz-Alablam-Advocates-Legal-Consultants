import React from 'react';
import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';

const EnhancedExpertise = () => {
  const { language } = useLanguage();

  const translations = {
    ar: {
      title: 'مجالات الخبرة القانونية',
      description: 'تغطية شاملة لكافة التخصصات القانونية لضمان حماية مصالحكم التجارية والشخصية.',
      viewAll: 'عرض جميع التخصصات',
      areas: [
        {
          icon: '🏢',
          title: 'القضايا التجارية',
          description: 'منازعات العقود، التحكيم التجاري، تصفية الشركات، وحماية الملكية الفكرية.'
        },
        {
          icon: '⚖️',
          title: 'القضايا المدنية',
          description: 'المطالبات المالية، التعويضات، ومنازعات التنفيذ بمختلف أنواعها.'
        },
        {
          icon: '👨‍👩‍👧‍👦',
          title: 'الأحوال الشخصية',
          description: 'قضايا الأسرة، الطلاق، الحضانة، المواريث، والوصايا وفقاً للتشريعات الحديثة.'
        },
        {
          icon: '🏠',
          title: 'القضايا العقارية',
          description: 'فض النزاعات الإيجارية، قضايا التملك الحر، وتسجيل العقارات.'
        },
        {
          icon: '✅',
          title: 'استشارات وقائية',
          description: 'مراجعة العقود قبل التوقيع، تقديم المشورة القانونية الاستباقية لتجنب المخاطر.'
        }
      ],
      cta: {
        title: 'هل تحتاج استشارة فورية؟',
        description: 'تواصل مع خبرائنا الآن للحصول على تقييم قانوني أولي لحالتك.',
        button: 'تواصل معنا'
      }
    },
    en: {
      title: 'Legal Practice Areas',
      description: 'Comprehensive coverage of all legal specialties to ensure protection of your commercial and personal interests.',
      viewAll: 'View All Specializations',
      areas: [
        {
          icon: '🏢',
          title: 'Commercial Cases',
          description: 'Contract disputes, commercial arbitration, company liquidation, and intellectual property protection.'
        },
        {
          icon: '⚖️',
          title: 'Civil Cases',
          description: 'Financial claims, compensation, and execution disputes of all types.'
        },
        {
          icon: '👨‍👩‍👧‍👦',
          title: 'Personal Status',
          description: 'Family cases, divorce, custody, inheritance, and wills according to the latest legislation.'
        },
        {
          icon: '🏠',
          title: 'Real Estate Cases',
          description: 'Settling rental disputes, freehold cases, and real estate registration.'
        },
        {
          icon: '✅',
          title: 'Preventative Consultancy',
          description: 'Reviewing contracts before signing, providing proactive legal advice to avoid risks.'
        }
      ],
      cta: {
        title: 'Need Immediate Advice?',
        description: 'Contact our experts now for an initial legal assessment of your case.',
        button: 'Contact Us Now'
      }
    }
  };

  const currentLang = translations[language];

  return (
    <section 
      id="expertise" 
      className="py-24"
      style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-serif font-bold mb-4 text-white">
              {currentLang.title}
            </h2>
            <p className="text-gray-300 text-lg">
              {currentLang.description}
            </p>
          </div>
          
          <Link
            to="contact"
            spy={true}
            smooth={true}
            className="text-amber-400 hover:text-white transition-colors flex items-center gap-2 font-bold underline decoration-amber-400 underline-offset-8"
          >
            {currentLang.viewAll}
            <span>{language === 'ar' ? '←' : '→'}</span>
          </Link>
        </div>

        {/* Expertise Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentLang.areas.map((area, index) => (
            <div 
              key={index}
              className="group bg-white/5 p-8 rounded-xl border border-white/10 hover:border-amber-400 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                {area.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-white">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}

          {/* Special CTA Card */}
          <div className="group bg-amber-500 p-8 rounded-xl transition-all duration-300 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {currentLang.cta.title}
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {currentLang.cta.description}
            </p>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              className="bg-gray-800 text-white px-6 py-3 rounded-full font-bold hover:bg-gray-700 transition-all"
            >
              {currentLang.cta.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedExpertise;

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا الجنائية',
      expertise: 'مجالات الخبرة',
      about: 'نبذة تعريفية',
      contact: 'اتصل بنا'
    },
    
    // Hero Section
    hero: {
      badge: 'خبرة قانونية تتجاوز 20 عاماً',
      title: 'التميز في القانون الجنائي',
      subtitle: 'جوهر خبرتنا ونقطة قوتنا',
      description: 'بقيادة المحامي عبدالعزيز الأبلم، ضابط شرطة دبي ورئيس النيابة العامة السابق. نضع خبرتنا الميدانية والقضائية العميقة التي تتجاوز العشرين عاماً في خدمة حمايتكم وضمان حقوقكم القانونية.',
      cta1: 'طلب استشارة جنائية',
      cta2: 'خدماتنا القانونية'
    },
    
    // Services Section
    services: {
      title: 'خدمات القانون الجنائي المتخصصة',
      subtitle: 'نقدم دفاعاً استراتيجياً وقوياً في كافة القضايا الجنائية',
      items: [
        { icon: 'account_balance', text: 'التمثيل والدفاع في مراحل التحقيق والنيابة' },
        { icon: 'history_edu', text: 'الاستئناف والطعن في الأحكام' },
        { icon: 'error', text: 'قضايا المخدرات، القتل، الاحتيال، وجرائم العنف' },
        { icon: 'gavel', text: 'جميع أنواع الجرائم الأخرى' }
      ]
    },
    
    // Methodology Section
    methodology: {
      title: 'منهجية العمل والالتزام تجاه العميل',
      subtitle: 'نتبنى منهجاً يركز على العميل أولاً لضمان أعلى مستويات الخدمة والتميز المهني في كل قضية نتولاها.',
      items: [
        { icon: 'analytics', title: 'تحليل شامل', desc: 'دراسة معمقة لجميع تفاصيل القضية من منظور قانوني واستراتيجي.' },
        { icon: 'record_voice_over', title: 'شفافية التواصل', desc: 'إبقاء العميل على اطلاع مستمر بجميع مستجدات قضيته والخيارات المتاحة.' },
        { icon: 'lightbulb', title: 'حلول موجهة', desc: 'تصميم استراتيجيات قانونية تتناسب بدقة مع احتياجات وأهداف كل عميل.' },
        { icon: 'groups', title: 'فريق متكامل', desc: 'فريق من المحامين والمستشارين ذوي الكفاءة العالية والخبرة العملية والانسجام التام.' }
      ],
      commitment: {
        title: 'التزامنا الجنائي',
        description: 'نحن نقف بجانبك من اللحظة الأولى للتحقيق وحتى صدور الحكم النهائي. يضم فريقنا نخبة من المحامين المتخصصين في قضايا الجرائم الجنائية الكبرى، وجرائم ذوي الياقات البيضاء، والجرائم الإلكترونية، حيث نكرس كل خبرتنا القانونية لإعداد استراتيجيات دفاع قوية ومدروسة لحماية حقوقك وضمان محاكمة عادلة.'
      }
    },
    
    // Expertise Section
    expertise: {
      title: 'مجالات الخبرة الشاملة',
      subtitle: 'يتميز مكتبنا بخلفية مؤسسنا القانونية العريقة كضابط شرطة سابق ورئيس نيابة سابق، مما يمنحنا قوة استثنائية في القانون الجنائي، بجانب تميزنا في المجالات التالية:',
      cta: 'طلب استشارة الآن',
      items: [
        { icon: 'corporate_fare', title: 'القانون التجاري والشركات', desc: 'تأسيس الشركات، عقود الشراكة، التحكيم التجاري، النزاعات بين الشركاء.' },
        { icon: 'payments', title: 'القانون المدني', desc: 'المطالبات المالية، العقود المدنية، قضايا التعويض، الملكية الفكرية.' },
        { icon: 'family_restroom', title: 'قانون الأحوال الشخصية', desc: 'قضايا الزواج والطلاق، الميراث، الحضانة والنفقة.' },
        { icon: 'apartment', title: 'القانون العقاري', desc: 'نزاعات الأراضي والعقارات، صياغة ومراجعة عقود البيع والإيجار.' },
        { icon: 'gavel', title: 'الاستشارات القانونية', desc: 'تقديم استشارات دقيقة وموثوقة للمؤسسات والأفراد لاتخاذ قرارات سليمة.' },
        { icon: 'security', title: 'القانون الجنائي', desc: 'جوهر خبرتنا ونقطة تميزنا', special: true }
      ]
    },
    
    // Contact Section
    contact: {
      title: 'لنتواصل لمناقشة قضيتك',
      subtitle: 'فريقنا القانوني جاهز لاستقبال استفساراتكم وتقديم المشورة اللازمة في مكاتبنا.',
      phone: '042845200',
      email: 'info@alablam.org',
      location: 'دبي، بورسعيد، بناية العويس، مكتب 506',
      form: {
        name: 'الاسم الكامل',
        phone: 'رقم الهاتف',
        service: 'نوع الخدمة',
        message: 'تفاصيل الاستفسار',
        submit: 'إرسال الطلب الآن',
        placeholders: {
          name: 'أدخل اسمك',
          phone: '05x --- ----',
          message: 'كيف يمكننا مساعدتكم؟'
        },
        options: [
          'استشارة جنائية (Core)',
          'القانون التجاري والشركات',
          'القانون المدني',
          'قانون الأحوال الشخصية',
          'القانون العقاري'
        ]
      }
    },
    
    // Footer
    footer: {
      description: 'نحن نؤمن بأن القانون ليس مجرد نصوص، بل هو حصن العدالة ودرع الحقوق. مكتب متخصص في تقديم الحلول القانونية المبتكرة والفعالة بقيادة نخبة من الخبراء.',
      quickLinks: 'روابط سريعة',
      mainServices: 'الخدمات الرئيسية',
      businessHours: 'ساعات العمل',
      hours: {
        weekdays: 'الإثنين - الجمعة: 9 صباحاً - 6 مساءً',
        saturday: 'السبت: 10 صباحاً - 2 مساءً'
      },
      download: 'تحميل ملف المكتب (PDF)',
      copyright: '© 2024 Abdulaziz Al-Ablam Lawyers & Legal Consultants. All Rights Reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: 'HOME',
      services: 'SERVICES',
      expertise: 'EXPERTISE',
      about: 'ABOUT',
      contact: 'CONTACT'
    },
    
    // Hero Section
    hero: {
      badge: 'Premier Legal Protection in UAE',
      title: 'The Fortress of Justice and Shield of Rights',
      subtitle: '',
      description: 'Under leadership of Attorney Abdulaziz Al-Ablam, former Dubai Police Officer and Chief Prosecutor. With over 20 years of practice, we provide elite Criminal Law defense and innovative legal solutions across Emirates.',
      cta1: 'REQUEST CONSULTATION',
      cta2: 'OUR SERVICES'
    },
    
    // Services Section
    services: {
      title: 'Criminal Law Services',
      subtitle: 'We provide strategic and strong defense in all criminal cases',
      items: [
        { icon: 'shield', text: 'Representation and defense during investigation and prosecution stages.' },
        { icon: 'history_edu', text: 'Appeals and challenging judgments.' },
        { icon: 'error', text: 'Cases involving drugs, murder, fraud, and violent crimes.' },
        { icon: 'gavel', text: 'And all other types of crimes.' }
      ]
    },
    
    // Methodology Section
    methodology: {
      title: 'Work Methodology & Client Commitment',
      subtitle: 'We adopt a client-first approach to ensure the highest levels of service and professional excellence in every case we handle.',
      items: [
        { icon: 'analytics', title: 'Comprehensive Analysis', desc: 'In-depth study of all case details from a legal and strategic perspective.' },
        { icon: 'campaign', title: 'Transparent Communication', desc: 'Keeping client continuously informed of all case developments and available options.' },
        { icon: 'psychology', title: 'Targeted Solutions', desc: 'Designing legal strategies precisely tailored to needs and goals of each client.' },
        { icon: 'groups', title: 'Dedicated Team', desc: 'A highly skilled legal team working cohesively to provide best representation possible.' }
      ],
      commitment: {
        title: 'Our Criminal Commitment:',
        description: 'We stand by you from the first moment of investigation until the final verdict. Our team comprises an elite group of lawyers specializing in cases of major criminal offenses, white-collar crimes, and Cybercrimes. We dedicate all our legal expertise to preparing strong, well-thought-out defense strategies to protect your rights and ensure a fair trial.'
      }
    },
    
    // Expertise Section
    expertise: {
      title: 'Legal Practice Areas',
      subtitle: 'Led by an expert with 20 years of experience, supported by consultants with over 15 years of expertise.',
      cta: 'CONTACT US NOW',
      items: [
        { icon: 'corporate_fare', title: 'Commercial & Corporate Law', desc: 'Company formation, partnership agreements, commercial arbitration, shareholder disputes.' },
        { icon: 'balance', title: 'Civil Law', desc: 'Financial claims, civil contracts, compensation cases, intellectual property.' },
        { icon: 'family_restroom', title: 'Personal Status Law', desc: 'Marriage and divorce cases, inheritance, custody, and alimony.' },
        { icon: 'apartment', title: 'Real Estate Law', desc: 'Land and property disputes, drafting and reviewing sale and lease contracts.' },
        { icon: 'verified_user', title: 'Legal Consultancy', desc: 'Providing accurate and reliable advice for institutions and individuals to make sound decisions.' },
        { icon: 'security', title: 'Need Immediate Legal Advice?', desc: 'Our multidisciplinary team is available for urgent consultations across all branches of law.', special: true }
      ]
    },
    
    // Contact Section
    contact: {
      title: 'Secure Your Rights',
      subtitle: 'Our legal team is ready to receive your inquiries and schedule an appointment for a personal meeting at our offices in Dubai.',
      phone: '04 284 5200',
      email: 'info@alablam.org',
      location: 'Deira, Port Saeed, Al Owais bldg., Office 506',
      form: {
        name: 'Full Name',
        phone: 'Phone Number',
        service: 'Service Required',
        message: 'Inquiry Details',
        submit: 'SUBMIT REQUEST',
        placeholders: {
          name: 'Enter your name',
          phone: '+971 -- --- ----',
          message: 'How can we help you?'
        },
        options: [
          'Criminal Defense',
          'Commercial & Corporate Law',
          'Civil Cases',
          'Real Estate Law',
          'Personal Status Law',
          'Legal Consultancy'
        ]
      }
    },
    
    // Footer
    footer: {
      description: 'A leading law firm in United Arab Emirates, specializing in innovative legal solutions and premier criminal defense founded by former Chief Prosecutor Abdulaziz Al-Ablam.',
      quickLinks: 'Quick Links',
      mainServices: 'Our Focus',
      businessHours: 'Business Hours',
      hours: {
        weekdays: 'Mon - Fri: 09:00 AM - 06:00 PM',
        saturday: 'Sat: 10:00 AM - 02:00 PM'
      },
      download: 'DOWNLOAD FIRM PROFILE',
      copyright: '© 2024 ABDULAZIZ AL-ABLAM ADVOCATES & LEGAL CONSULTANTS. ALL RIGHTS RESERVED.',
      privacy: 'PRIVACY POLICY',
      terms: 'TERMS OF SERVICE'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'ar';
  });

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL: language === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

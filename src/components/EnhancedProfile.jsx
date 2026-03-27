import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const EnhancedProfile = () => {
  const { language } = useLanguage();

  const translations = {
    ar: {
      title: 'نبذة عن المحامي عبدالعزيز الأبلم',
      subtitle: 'الخبرة الأمنية والقضائية في خدمة موكلينا',
      profileText1: 'بدأ الأستاذ عبدالعزيز الأبلم مسيرته المهنية في صرح شرطة دبي، حيث اكتسب فهماً عميقاً لمنظومة الضبط الجنائي وإجراءات التحقيق الميداني. انتقل بعدها للعمل في النيابة العامة كرئيس نيابة، مما منحه رؤية ثاقبة حول كيفية بناء القضايا الجنائية ومعايير الإدانة والبراءة.',
      profileText2: 'اليوم، يكرس كل هذه الخبرات المتراكمة للدفاع عن موكليه، متسلحاً بمعرفة لا يملكها الكثيرون في "كواليس" النظام القانوني، مما يجعله الخيار الأول للقضايا ذات الطبيعة الحساسة والمعقدة.',
      experience: '20+',
      experienceLabel: 'عاماً من الخبرة',
      credentials: [
        'ضابط شرطة سابق - دبي',
        'رئيس نيابة سابق',
        'محامٍ مقيد أمام جميع المحاكم',
        'مستشار قانوني معتمد'
      ]
    },
    en: {
      title: 'About Abdulaziz Al-Ablam',
      subtitle: 'Security and Judicial Experience at the Service of Our Clients',
      profileText1: 'Abdulaziz Al-Ablam began his professional career in Dubai Police force, where he gained a deep understanding of criminal justice system and field investigation procedures. He then transitioned to work in Public Prosecution as a Chief Prosecutor, which provided him with acute insight into how criminal cases are built and criteria for conviction and acquittal.',
      profileText2: 'Today, he dedicates all of this accumulated experience to defending his clients, armed with knowledge that few possess about "inner workings" of legal system, making him first choice for sensitive and complex cases.',
      experience: '20+',
      experienceLabel: 'Years of Experience',
      credentials: [
        'Former Dubai Police Officer',
        'Former Chief Prosecutor',
        'Registered Advocate before all Courts',
        'Certified Legal Consultant'
      ]
    }
  };

  const currentLang = translations[language];

  return (
    <section id="profile" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/3">
            <div className="relative">
              <img 
                className="rounded-3xl w-full h-[500px] object-cover shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-7d-SMf_sTZscITOv5PGV_0BqQzQXJ8bFlPKxBg3Fj0DkmgRwlj64-8aAKmwdEJEEznGBU0aaBj8Aee_jejqHNa6H1QNqeW9m6RkGBnXdWXgv4zzEAXmK7Enke7DCy2WCkBaqhXgliHP9VGPtGwmiJyjfTnMn-gBeqk7xKIkxKTzwFSPm0pAAL6QEafEmesvM2kJtKN8ZSZzkoE-G11HVtwiMnnlwRQ08hLCU3tldWRKg78LnayyFOvTUBZ2S2MX0_xFQl-cSQE_l"
                alt="Prestigious law office"
              />
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-amber-500 p-8 rounded-2xl text-white shadow-xl">
                <div className="text-4xl font-bold">
                  {currentLang.experience}
                </div>
                <div className="text-sm font-medium">
                  {currentLang.experienceLabel}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-2/3 space-y-6">
            {/* Title */}
            <h2 className="text-4xl font-serif font-bold text-gray-800">
              {currentLang.title}
            </h2>
            
            <p className="text-xl text-amber-600 font-bold mb-4">
              {currentLang.subtitle}
            </p>

            {/* Profile Text */}
            <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
              <p>{currentLang.profileText1}</p>
              <p>{currentLang.profileText2}</p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {currentLang.credentials.map((credential, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 text-gray-700 font-semibold"
                >
                  <span className="text-amber-500 text-xl">✓</span>
                  {credential}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedProfile;

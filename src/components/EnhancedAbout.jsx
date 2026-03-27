import React from 'react';
import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';

const EnhancedAbout = () => {
  const { language } = useLanguage();

  const translations = {
    ar: {
      title: 'التزامنا بالعدالة والسيادة القانونية',
      description: 'نحن لسنا مجرد مكتب محاماة، بل نحن شركاؤكم في حماية حقوقكم. نجمع بين الخبرة الميدانية العسكرية والخبرة القضائية العميقة لنقدم رؤية قانونية شاملة.',
      mission: {
        title: 'رسالتنا',
        description: 'توفير دفاع قانوني صلب قائم على أسس علمية وخبرة واقعية في النظام القضائي الإماراتي.'
      },
      vision: {
        title: 'رؤيتنا',
        description: 'أن نكون المرجع الأول في القضايا المعقدة التي تتطلب حنكة قانونية ودراية بإجراءات الضبط والتحقيق.'
      },
      profileTitle: 'نبذة عن المحامي عبدالعزيز الأبلم',
      profileSubtitle: 'الخبرة الأمنية والقضائية في خدمة موكلينا',
      profileText1: 'بدأ الأستاذ عبدالعزيز الأبلم مسيرته المهنية في صرح شرطة دبي، حيث اكتسب فهماً عميقاً لمنظومة الضبط الجنائي وإجراءات التحقيق الميداني. انتقل بعدها للعمل في النيابة العامة كرئيس نيابة، مما منحه رؤية ثاقبة حول كيفية بناء القضايا الجنائية ومعايير الإدانة والبراءة.',
      profileText2: 'اليوم، يكرس كل هذه الخبرات المتراكمة للدفاع عن موكليه، متسلحاً بمعرفة لا يملكها الكثيرون في "كواليس" النظام القانوني، مما يجعله الخيار الأول للقضايا ذات الطبيعة الحساسة والمعقدة.',
      credentials: [
        'ضابط شرطة سابق - دبي',
        'رئيس نيابة سابق',
        'محامٍ مقيد أمام جميع المحاكم',
        'مستشار قانوني معتمد'
      ]
    },
    en: {
      title: 'Our Commitment to Justice and Legal Sovereignty',
      description: 'We are not just a law firm; we are your partners in protecting your rights. We combine field military experience and deep judicial expertise to provide a comprehensive legal vision.',
      mission: {
        title: 'Our Mission',
        description: 'To provide a solid legal defense based on scientific foundations and real-world experience in UAE judicial system.'
      },
      vision: {
        title: 'Our Vision',
        description: 'To be primary reference for complex cases requiring legal shrewdness and knowledge of arrest and investigation procedures.'
      },
      profileTitle: 'About Abdulaziz Al-Ablam',
      profileSubtitle: 'Security and Judicial Experience at the Service of Our Clients',
      profileText1: 'Abdulaziz Al-Ablam began his professional career in Dubai Police force, where he gained a deep understanding of criminal justice system and field investigation procedures. He then transitioned to work in Public Prosecution as a Chief Prosecutor, which provided him with acute insight into how criminal cases are built and criteria for conviction and acquittal.',
      profileText2: 'Today, he dedicates all of this accumulated experience to defending his clients, armed with knowledge that few possess about "inner workings" of legal system, making him first choice for sensitive and complex cases.',
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
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img 
                className="rounded-2xl h-64 w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiJcReqCiijhvfmliaRa6Th-vDZTH9d8mkttByG1vDjMdQLqir1MfnetxfFrccZ8Vr5BBc2Y7lvlQaf3Mn3B1hxssKaujAZ9SrYsZimtdXbWy0FMsF5HhyNYsa8C223GSB1mpqxt53s09JofCkD8d1TTWa1_T_uSg3_r2n-ew_A8NXVradkD8v_OnwrrTMxtMFSopXW_ozktfirmnh-CQnE8SBiVblRHVTJjGeRsqdX9OJzyzHWCwkmBf8Atw0wP0KmBLClISInePE"
                alt="Legal books library"
              />
              <img 
                className="rounded-2xl h-64 w-full object-cover mt-8"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqa28puZQv29VybzK94DrqsK4TsNuCd3syaJ5Ooa0he8gPG4x34zbaHj7xWEI-oUyNYmM6XYwQMkOhfmaKyqniYmBa3iEnMu0wyTXbIcUFvH6gZ-PwrQ8_zdbqCcY_ogOZfViTPIeuvkFBur0qzp4bdoIKaaktncB3zdndf5FJEQLI2Kv_ciU5zc-NsoQYGKeAYaYm80-YUSmjH-Z5Rp8GSg4kLfjneUO-H6x9WoqQ040lc9K6cIBAuXH7kkZWq-YobpAdcIbmDczE"
                alt="Business handshake"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl font-serif font-bold text-gray-800">
              {currentLang.title}
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              {currentLang.description}
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6">
              {/* Mission */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                  <span className="text-amber-600 text-2xl">🚩</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-800">
                    {currentLang.mission.title}
                  </h4>
                  <p className="text-gray-600">
                    {currentLang.mission.description}
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                  <span className="text-amber-600 text-2xl">👁</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-800">
                    {currentLang.vision.title}
                  </h4>
                  <p className="text-gray-600">
                    {currentLang.vision.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAbout;

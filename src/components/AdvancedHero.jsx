import React from 'react';
import { useLanguage } from '../contexts/AdvancedLanguageContext';

const AdvancedHero = () => {
  const { t, language } = useLanguage();

  const backgroundImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAcmZoKcBE_ACH1RqZOj2_wtOs9sfWX8clguEHEJjJmSim8Evc2j3sw1pxdpBnZvNPygRQuM7d7yVix2atvhPo0pJHHck-pEzX9KVjxVPMzbUmJEZYS5Wjqw4Co8ceip7GMRaBAvSTn4uhfJ_ttmPaDCM7fMJQx4jvjspVwFYfBNUfBFBTNUezdUNRaExn7iVXAInYsXFGF9uc0vK8AELn2BeEF8ne2GIH6w8uIwiEccr-a3TKwWqOj2DHMOi7pKA0ZGoMDxA3UkAC_";

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
        <img 
          alt="Legal background" 
          className="w-full h-full object-cover opacity-30" 
          src={backgroundImage}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            {t('hero.badge')}
          </div>

          {/* Title */}
          <h1 className="text-5xl lg:text-7xl font-headline font-bold leading-[1.15]">
            {language === 'ar' ? (
              <>
                التميز في <span className="text-primary">القانون الجنائي</span><br/>
                جوهر خبرتنا ونقطة قوتنا
              </>
            ) : (
              <>
                The <span className="text-primary">Fortress</span> of Justice and Shield of Rights
              </>
            )}
          </h1>

          {/* Description */}
          <p className="text-lg text-white/70 leading-relaxed font-body">
            {language === 'ar' ? (
              <>
                بقيادة المحامي <span className="text-white font-bold">عبدالعزيز الأبلم</span>، ضابط شرطة دبي ورئيس النيابة العامة السابق. نضع خبرتنا الميدانية والقضائية العميقة التي تتجاوز العشرين عاماً في خدمة حمايتكم وضمان حقوقكم القانونية.
              </>
            ) : (
              <>
                Under leadership of <span className="text-white font-bold">Attorney Abdulaziz Al-Ablam</span>, former <span className="text-white font-semibold">Dubai Police Officer</span> and <span className="text-white font-semibold">Chief Prosecutor</span>. With over <span className="text-primary font-bold">20 years of practice</span>, we provide elite Criminal Law defense and innovative legal solutions across Emirates.
              </>
            )}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#contact"
              className="px-8 py-4 bg-primary text-background font-bold rounded hover:brightness-110 transition-all flex items-center gap-3"
            >
              {t('hero.cta1')}
              <span className="material-symbols-outlined">
                {language === 'ar' ? 'gavel' : 'arrow_forward'}
              </span>
            </a>
            <a 
              href="#services"
              className="px-8 py-4 border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-all"
            >
              {t('hero.cta2')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedHero;

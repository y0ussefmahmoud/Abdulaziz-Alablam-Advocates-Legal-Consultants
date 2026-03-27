import React from 'react';
import { useLanguage } from '../contexts/CompleteLanguageContext';

const CompleteAbout = () => {
  const { t, language } = useLanguage();

  const officeImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuA-7d-SMf_sTZscITOv5PGV_0BqQzQXJ8bFlPKxBg3Fj0DkmgRwlj64-8aAKmwdEJEEznGBU0aaBj8Aee_jejqHNa6H1QNqeW9m6RkGBnXdWXgv4zzEAXmK7Enke7DCy2WCkBaqhXgliHP9VGPtGwmiJyjfTnMn-gBeqk7xKIkxKTzwFSPm0pAAL6QEafEmesvM2kJtKN8ZSZzkoE-G11HVtwiMnnlwRQ08hLCU3tldWRKg78LnayyFOvTUBZ2S2MX0_xFQl-cSQE_l";

  return (
    <section className="py-24 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Identity and Vision */}
            <div className="border-r-4 border-primary pr-6">
              <h2 className="text-3xl font-headline font-bold text-white mb-4">
                {t('about.title')}
              </h2>
              <p className="text-white/70 leading-relaxed italic">
                {t('about.vision')}
              </p>
            </div>

            {/* Mission and Values */}
            <div className="space-y-8">
              {/* Mission */}
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-primary">rocket_launch</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">
                    {t('about.mission.title')}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {t('about.mission.desc')}
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-primary">workspace_premium</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">
                    {t('about.values.title')}
                  </h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    {t('about.values.items').map((value, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        <strong>{value.label}:</strong> {value.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image with Stats */}
          <div className="relative">
            <div className="aspect-square bg-surface border border-primary/20 overflow-hidden group">
              <img 
                alt="Legal Office" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                src={officeImageUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              <div className="absolute bottom-10 right-10 left-10 p-8 border border-primary/30 bg-background/80 backdrop-blur-md">
                <h4 className="text-primary font-bold mb-2">
                  {t('about.profile.name')}
                </h4>
                <p className="text-xs text-white/60 mb-4">
                  {t('about.profile.role')}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {t('about.profile.stats').map((stat, index) => (
                    <div key={index} className="text-center p-2 bg-white/5">
                      <span className="block text-xl font-bold text-white">
                        {stat.value}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-white/40">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteAbout;

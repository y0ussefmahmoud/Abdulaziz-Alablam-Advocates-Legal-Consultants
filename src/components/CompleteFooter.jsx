import React from 'react';
import { useLanguage } from '../contexts/CompleteLanguageContext';

const CompleteFooter = () => {
  const { t, language } = useLanguage();

  const logoUrl = "https://lh3.googleusercontent.com/aida/ADBb0ug2d98s1M2O9BNNHaB4HFQxsb0Bf45yNcS7CJFQmyCmp3hX2lYaQejvENxNFv2ne7xeHZtompXveeH0d2PoaB3MoAk-0FVibMT8W92QMiK-yHmhIozdJ8VC7kSZp4kqOUQiv0NDbvKb1vC02wJschycLZB9Z5QOvUlmEUng1xu79R561GfbAav2el5BHRA1n0fJzSZYCRNDzrZjbMaFGuryEiad0NNc69QiL_wqGPRjstW2Zmbyc_TZZAvoUGxXRHviMHtikVzTyw";

  return (
    <footer className="bg-background border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              alt="Abdulaziz Alablam Logo" 
              className="h-16 w-auto" 
              src={logoUrl}
            />
            <p className="text-white/40 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-primary transition-colors">
                  {t('nav.expertise')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Main Services */}
          <div className="space-y-6">
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs">
              {t('footer.mainServices')}
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {language === 'ar' ? 'الدفاع الجنائي' : 'Criminal Law'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {language === 'ar' ? 'الاستشارات التجارية' : 'Commercial Law'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {language === 'ar' ? 'قضايا التعويضات' : 'Civil Cases'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {language === 'ar' ? 'نزاعات العقارات' : 'Real Estate'}
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs">
              {t('footer.businessHours')}
            </h4>
            <div className="text-sm text-white/60 space-y-2">
              <p>{t('footer.hours.weekdays')}</p>
              <p>{t('footer.hours.saturday')}</p>
            </div>
            <button className="w-full py-3 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-background transition-all">
              {t('footer.download')}
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/30 uppercase tracking-widest">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-8">
            <a 
              href="#" 
              className="text-[10px] text-white/30 hover:text-primary transition-colors uppercase tracking-widest"
            >
              {t('footer.privacy')}
            </a>
            <a 
              href="#" 
              className="text-[10px] text-white/30 hover:text-primary transition-colors uppercase tracking-widest"
            >
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CompleteFooter;

import React, { useState } from 'react';
import { useLanguage } from '../contexts/AdvancedLanguageContext';

const AdvancedContact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: t('contact.form.options')[0],
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert(language === 'ar' ? 'تم إرسال طلبك بنجاح!' : 'Your request has been submitted successfully!');
  };

  return (
    <section className="py-24 bg-background" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-surface border border-white/5 overflow-hidden shadow-2xl">
          {/* Contact Info */}
          <div className="p-12 lg:p-20 space-y-12">
            <div>
              <h2 className="text-4xl font-headline font-bold mb-4">
                {language === 'ar' ? (
                  <>لنتواصل لمناقشة <span className="text-primary">قضيتك</span></>
                ) : (
                  <>Secure Your <span className="text-primary">Rights</span></>
                )}
              </h2>
              <p className="text-white/60">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-all group-hover:text-background">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">
                    {language === 'ar' ? 'اتصل بنا' : 'Call Us'}
                  </p>
                  <p className="text-lg font-bold">
                    {t('contact.phone')}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-all group-hover:text-background">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                  </p>
                  <p className="text-lg font-bold">
                    {t('contact.email')}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-all group-hover:text-background">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">
                    {language === 'ar' ? 'الموقع' : 'Location'}
                  </p>
                  <p className="text-lg font-bold">
                    {t('contact.location')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-12 lg:p-20 bg-background/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    {t('contact.form.name')}
                  </label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-0 transition-all outline-none" 
                    placeholder={t('contact.form.placeholders.name')}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    {t('contact.form.phone')}
                  </label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-0 transition-all outline-none" 
                    placeholder={t('contact.form.placeholders.phone')}
                    required
                  />
                </div>
              </div>

              {/* Service Type */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  {t('contact.form.service')}
                </label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white/60 focus:border-primary focus:ring-0 transition-all outline-none"
                >
                  {t('contact.form.options').map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  {t('contact.form.message')}
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-0 transition-all outline-none" 
                  placeholder={t('contact.form.placeholders.message')}
                  required
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full py-4 bg-primary text-background font-bold uppercase tracking-widest hover:brightness-110 transition-all"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedContact;

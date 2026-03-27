import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const EnhancedContact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const translations = {
    ar: {
      title: 'لنتحدث عن قضيتك',
      description: 'فريقنا القانوني جاهز لاستقبال استفساراتكم وتحديد موعد للمقابلة الشخصية في مكاتبنا.',
      contactInfo: {
        phone: {
          label: 'اتصل بنا',
          value: '+971 4 000 0000'
        },
        email: {
          label: 'البريد الإلكتروني',
          value: 'info@alablam.ae'
        },
        location: {
          label: 'الموقع',
          value: 'دبي، الإمارات العربية المتحدة'
        }
      },
      form: {
        name: 'الاسم الكامل',
        namePlaceholder: 'أدخل اسمك',
        phone: 'رقم الهاتف',
        phonePlaceholder: '+971 -- --- ----',
        service: 'نوع الخدمة المطلوبة',
        message: 'تفاصيل الاستفسار',
        messagePlaceholder: 'كيف يمكننا مساعدتكم؟',
        submit: 'إرسال الطلب الآن'
      },
      services: [
        'استشارة جنائية',
        'قضايا مدنية',
        'عقارات',
        'أحوال شخصية'
      ]
    },
    en: {
      title: "Let's Talk About Your Case",
      description: 'Our legal team is ready to receive your inquiries and schedule an appointment for a personal meeting at our offices.',
      contactInfo: {
        phone: {
          label: 'Call Us',
          value: '+971 4 000 0000'
        },
        email: {
          label: 'Email Address',
          value: 'info@alablam.ae'
        },
        location: {
          label: 'Location',
          value: 'Dubai, United Arab Emirates'
        }
      },
      form: {
        name: 'Full Name',
        namePlaceholder: 'Enter your name',
        phone: 'Phone Number',
        phonePlaceholder: '+971 -- --- ----',
        service: 'Service Required',
        message: 'Inquiry Details',
        messagePlaceholder: 'How can we help you?',
        submit: 'Submit Request Now'
      },
      services: [
        'Criminal Consultation',
        'Civil Cases',
        'Real Estate',
        'Personal Status'
      ]
    }
  };

  const currentLang = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert(language === 'ar' ? 'تم إرسال طلبك بنجاح!' : 'Your request has been submitted successfully!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div 
          className="rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)'
          }}
        >
          {/* Left Side - Contact Info */}
          <div className="w-full lg:w-1/2 p-12 lg:p-20 text-white space-y-12">
            <h2 className="text-4xl font-serif font-bold">
              {currentLang.title}
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              {currentLang.description}
            </p>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-amber-400 text-2xl">📞</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    {currentLang.contactInfo.phone.label}
                  </p>
                  <p className="text-xl font-bold">
                    {currentLang.contactInfo.phone.value}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-amber-400 text-2xl">✉</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    {currentLang.contactInfo.email.label}
                  </p>
                  <p className="text-xl font-bold">
                    {currentLang.contactInfo.email.value}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-amber-400 text-2xl">📍</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    {currentLang.contactInfo.location.label}
                  </p>
                  <p className="text-xl font-bold">
                    {currentLang.contactInfo.location.value}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2 bg-gray-50 p-12 lg:p-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    {currentLang.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={currentLang.form.namePlaceholder}
                    className="w-full px-4 py-4 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-amber-500 transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    {currentLang.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={currentLang.form.phonePlaceholder}
                    className="w-full px-4 py-4 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-amber-500 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Service */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  {currentLang.form.service}
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-amber-500 transition-all"
                  required
                >
                  <option value="">
                    {language === 'ar' ? 'اختر الخدمة' : 'Select Service'}
                  </option>
                  {currentLang.services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  {currentLang.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={currentLang.form.messagePlaceholder}
                  rows="4"
                  className="w-full px-4 py-4 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-amber-500 transition-all resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-5 bg-amber-500 text-white rounded-lg font-bold text-lg hover:bg-amber-600 transition-all shadow-lg transform hover:-translate-y-1"
              >
                {currentLang.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContact;

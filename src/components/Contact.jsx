import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    alert(isRTL ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-primary to-dark-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 rounded-2xl border border-gold/20">
              <h3 className="text-2xl font-bold text-gold mb-6">
                {t('contact.title')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gold mb-2">
                      {isRTL ? 'العنوان' : 'Address'}
                    </h4>
                    <p className="text-gray-300">
                      {t('contact.info.address')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gold mb-2">
                      {isRTL ? 'الهاتف' : 'Phone'}
                    </h4>
                    <p className="text-gray-300">
                      {t('contact.info.phone')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gold mb-2">
                      {isRTL ? 'البريد الإلكتروني' : 'Email'}
                    </h4>
                    <p className="text-gray-300">
                      {t('contact.info.email')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-dark-accent to-dark-secondary p-8 rounded-2xl border border-gold/20">
              <div className="aspect-video bg-gold/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-gold text-4xl mb-4" />
                  <p className="text-gray-400">
                    {isRTL ? 'موقعنا على الخريطة' : 'Our Location on Map'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-8 rounded-2xl border border-gold/20">
            <h3 className="text-2xl font-bold text-gold mb-6">
              {t('contact.form.title')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gold font-semibold mb-2">
                  {t('contact.form.name')} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-primary/50 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                  placeholder={t('contact.form.name')}
                />
              </div>

              <div>
                <label className="block text-gold font-semibold mb-2">
                  {t('contact.form.email')} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-primary/50 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                  placeholder={t('contact.form.email')}
                />
              </div>

              <div>
                <label className="block text-gold font-semibold mb-2">
                  {t('contact.form.phone')} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-primary/50 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                  placeholder={t('contact.form.phone')}
                />
              </div>

              <div>
                <label className="block text-gold font-semibold mb-2">
                  {t('contact.form.message')} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-primary/50 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 resize-none"
                  placeholder={t('contact.form.message')}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-secondary flex items-center justify-center space-x-2 group"
              >
                <span>{t('contact.form.submit')}</span>
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

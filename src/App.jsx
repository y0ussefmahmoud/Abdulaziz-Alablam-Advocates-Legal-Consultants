import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';

function App() {
  return (
    <LanguageProvider>
      <div style={{ backgroundColor: '#111827', color: 'white', minHeight: '100vh' }}>
        <Header />
        
        {/* Hero Section - Simple Version */}
        <section style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #111827, #1f2937, #374151)',
          position: 'relative',
          padding: '20px'
        }}>
          <div style={{ textAlign: 'center', zIndex: 10, maxWidth: '1200px' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              color: 'white',
              marginBottom: '20px',
              lineHeight: '1.2'
            }}>
              عبد العزيز الأبلم للمحاماة
            </h1>
            <h2 style={{ 
              fontSize: '1.5rem', 
              color: '#eab308',
              marginBottom: '30px'
            }}>
              Abdulaziz Alablam Advocates & Legal Consultants
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#d1d5db',
              marginBottom: '40px',
              maxWidth: '800px',
              margin: '0 auto 40px'
            }}>
              نؤمن بأن القانون ليس مجرد نصوص، بل هو حصن العدالة ودرع الحقوق
            </p>
            <button style={{
              backgroundColor: '#eab308',
              color: '#111827',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              استكشف خدماتنا
            </button>
          </div>
        </section>
        
        {/* Services Section */}
        <section style={{ padding: '80px 20px', backgroundColor: '#1f2937' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ 
              color: '#eab308', 
              fontSize: '2.5rem', 
              textAlign: 'center',
              marginBottom: '50px'
            }}>
              خدماتنا الجنائية
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              <div style={{ 
                backgroundColor: '#374151', 
                padding: '30px', 
                borderRadius: '10px',
                border: '1px solid #eab308'
              }}>
                <h3 style={{ color: '#eab308', marginBottom: '15px' }}>التمثيل والدفاع</h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                  التمثيل والدفاع في مراحل التحقيق والنيابة
                </p>
              </div>
              <div style={{ 
                backgroundColor: '#374151', 
                padding: '30px', 
                borderRadius: '10px',
                border: '1px solid #eab308'
              }}>
                <h3 style={{ color: '#eab308', marginBottom: '15px' }}>الاستئناف</h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                  الاستئناف والطعن في الأحكام
                </p>
              </div>
              <div style={{ 
                backgroundColor: '#374151', 
                padding: '30px', 
                borderRadius: '10px',
                border: '1px solid #eab308'
              }}>
                <h3 style={{ color: '#eab308', marginBottom: '15px' }}>القضايا المتخصصة</h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                  قضايا المخدرات، القتل، الاحتيال، وجرائم العنف
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section style={{ padding: '80px 20px', backgroundColor: '#111827' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ 
              color: '#eab308', 
              fontSize: '2.5rem', 
              marginBottom: '30px'
            }}>
              اتصل بنا
            </h2>
            <div style={{ marginBottom: '30px' }}>
              <p style={{ color: '#d1d5db', marginBottom: '10px' }}>
                📧 info@alablam.org
              </p>
              <p style={{ color: '#d1d5db', marginBottom: '10px' }}>
                📞 +971 4 284 5200
              </p>
              <p style={{ color: '#d1d5db' }}>
                📍 ديره - بورسعيد - بناية العويس - مكتب 506
              </p>
            </div>
            <button style={{
              backgroundColor: '#eab308',
              color: '#111827',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              طلب استشارة
            </button>
          </div>
        </section>
      </div>
    </LanguageProvider>
  );
}

export default App;

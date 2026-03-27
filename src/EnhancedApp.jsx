import React from 'react';
import { LanguageProvider } from './contexts/EnhancedLanguageContext';
import EnhancedHero from './components/EnhancedHero';
import EnhancedServices from './components/EnhancedServices';
import EnhancedAbout from './components/EnhancedAbout';
import EnhancedExpertise from './components/EnhancedExpertise';
import EnhancedProfile from './components/EnhancedProfile';
import EnhancedContact from './components/EnhancedContact';
import EnhancedFooter from './components/EnhancedFooter';

function EnhancedApp() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <EnhancedHero />
        <main>
          <EnhancedServices />
          <EnhancedAbout />
          <EnhancedExpertise />
          <EnhancedProfile />
          <EnhancedContact />
        </main>
        <EnhancedFooter />
      </div>
    </LanguageProvider>
  );
}

export default EnhancedApp;

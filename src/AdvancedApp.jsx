import React from 'react';
import AdvancedNavigation from './components/AdvancedNavigation';
import AdvancedHero from './components/AdvancedHero';
import AdvancedServices from './components/AdvancedServices';
import AdvancedMethodology from './components/AdvancedMethodology';
import AdvancedExpertise from './components/AdvancedExpertise';
import AdvancedAbout from './components/AdvancedAbout';
import AdvancedContact from './components/AdvancedContact';
import AdvancedFooter from './components/AdvancedFooter';
import { LanguageProvider } from './contexts/AdvancedLanguageContext';

const AdvancedApp = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-on-surface">
        <AdvancedNavigation />
        <main>
          <AdvancedHero />
          <AdvancedServices />
          <AdvancedMethodology />
          <AdvancedExpertise />
          <AdvancedAbout />
          <AdvancedContact />
        </main>
        <AdvancedFooter />
      </div>
    </LanguageProvider>
  );
};

export default AdvancedApp;

import React from 'react';
import CompleteNavigation from './components/CompleteNavigation';
import CompleteHero from './components/CompleteHero';
import CompleteServices from './components/CompleteServices';
import CompleteMethodology from './components/CompleteMethodology';
import CompleteExpertise from './components/CompleteExpertise';
import CompleteAbout from './components/CompleteAbout';
import CompleteContact from './components/CompleteContact';
import CompleteFooter from './components/CompleteFooter';
import { LanguageProvider } from './contexts/CompleteLanguageContext';

const CompleteApp = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-on-surface">
        <CompleteNavigation />
        <main>
          <CompleteHero />
          <CompleteServices />
          <CompleteMethodology />
          <CompleteExpertise />
          <CompleteAbout />
          <CompleteContact />
        </main>
        <CompleteFooter />
      </div>
    </LanguageProvider>
  );
};

export default CompleteApp;

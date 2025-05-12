import getRouterBasename from '@/lib/router';
import App from 'App';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useApi, useAuth, useChatInteract } from '@chainlit/react-client';

export default function AppWrapper() {
  const [translationLoaded, setTranslationLoaded] = useState(false);
  const { isAuthenticated, isReady } = useAuth();
  const { i18n } = useTranslation();
  const { windowMessage } = useChatInteract();

  // State for selected language
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return localStorage.getItem('language') || i18n.language || 'en';
  });

  // Fetch translations using selectedLanguage
  const { data: translations } = useApi<any>(
    `/project/translations?language=${selectedLanguage}`
  );

  // Apply the language bundle when fetched
  useEffect(() => {
    if (!translations) {
      setTranslationLoaded(false); // Reset if translations are unloaded
      return;
    }

    i18n.addResourceBundle(
      selectedLanguage,
      'translation',
      translations.translation,
      true, // deep merge
      true // overwrite existing
    );

    // Ensure i18n uses the selected language
    if (i18n.language !== selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
    }

    setTranslationLoaded(true); // Mark translations as loaded
  }, [translations, selectedLanguage, i18n]);

  // Listen for language changes and update state
  useEffect(() => {
    const handleLanguageChange = (lang: string) => {
      localStorage.setItem('language', lang);
      setSelectedLanguage(lang);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  // Handle window messages
  useEffect(() => {
    const handleWindowMessage = (event: MessageEvent) => {
      windowMessage(event.data);
    };
    window.addEventListener('message', handleWindowMessage);
    return () => window.removeEventListener('message', handleWindowMessage);
  }, [windowMessage]);

  // Redirect logic
  if (
    isReady &&
    !isAuthenticated &&
    !['/login', '/login/callback', '/landing'].includes(
      window.location.pathname.replace(getRouterBasename(), '')
    )
  ) {
    window.location.href = getRouterBasename() + '/landing';
  }

  // Wait for translations before rendering the app
  if (!translationLoaded) return null;

  return <App />;
}

import React from 'react';
import { useTranslation } from 'react-i18next';

const SwitchLangButton: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en-US';

  const handleLanguageChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLang = e.target.value;
    await i18n.changeLanguage(newLang); // Wait for the language change
    localStorage.setItem('language', newLang);
  };

  return (
    <select value={currentLang} onChange={handleLanguageChange}>
      <option value="en-US">EN</option>
      <option value="pt-PT">PT</option>
    </select>
  );
};
export default SwitchLangButton;

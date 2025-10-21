import React from 'react';
import { useLanguageContext } from '../contexts/LanguageContext';

const LanguageDisplay = () => {
  const { language, setLanguage } = useLanguageContext();

  const currentLangName = language === 'es' ? 'Español' : 'Inglés';
  const nextLangName = language === 'es' ? 'Inglés' : 'Español';

  return (
    <div>
      <p>Idioma actual: <strong>{currentLangName}</strong></p>
      <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}>
        Cambiar a {nextLangName}
      </button>
    </div>
  );
};

export default LanguageDisplay;

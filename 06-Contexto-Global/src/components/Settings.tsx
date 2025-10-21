import React from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import { useLanguageContext } from '../contexts/LanguageContext';

const Settings = () => {
  const { theme, toggleTheme } = useThemeContext();
  const { language, setLanguage } = useLanguageContext();

  const currentLangName = language === 'es' ? 'Español' : 'Inglés';
  const nextLangName = language === 'es' ? 'Inglés' : 'Español';

  return (
    <div>
      <h2>Configuración</h2>

      <p>Tema actual: <strong>{theme === 'light' ? 'claro' : 'oscuro'}</strong></p>
      <button onClick={toggleTheme}>
        Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
      </button>

      <p>Idioma actual: <strong>{currentLangName}</strong></p>
      <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}>
        Cambiar a {nextLangName}
      </button>
    </div>
  );
};

export default Settings;

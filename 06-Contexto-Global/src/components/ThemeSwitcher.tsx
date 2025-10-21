import React from 'react';
import { useThemeContext } from '../contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div>
      <p>El tema actual es: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>
        Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;

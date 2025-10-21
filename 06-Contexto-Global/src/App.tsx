import React from 'react';
import './App.css'; 
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { CartProvider } from './contexts/CartContext';

import ThemeSwitcher from './components/ThemeSwitcher';
import LanguageDisplay from './components/LanguageDisplay';
import Settings from './components/Settings';
import CartSummary from './components/CartSummary';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <div style={{ padding: '20px' }}>
            <h1>Aplicación Completa con Contextos</h1>
            <ThemeSwitcher />
            <LanguageDisplay />
            <Settings />
            <CartSummary />
          </div>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

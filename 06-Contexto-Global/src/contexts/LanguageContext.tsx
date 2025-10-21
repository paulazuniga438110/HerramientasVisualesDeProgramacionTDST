import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Definimos la interfaz
interface LanguageState {
  language: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
}

// 2. Creamos el contexto
const LanguageContext = createContext<LanguageState | undefined>(undefined);

// 3. Creamos el proveedor
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 4. Hook personalizado
export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguageContext debe usarse dentro de LanguageProvider');
  return context;
};

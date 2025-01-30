// import React from 'react';

import { createContext, ReactNode, useContext, useState } from "react";

interface LanguageType {
  isEnglish: boolean;
  toggleLanguage: () => void;
}

const Language = createContext<LanguageType | undefined>(undefined);

export function LanguageSetter({ children }: { children: ReactNode }) {
  const [isEnglish, setIsEnglish] = useState(true);

  function toggleLanguage() {
    setIsEnglish(prev => !prev);
  }

  return  (
    <Language.Provider value={{ isEnglish, toggleLanguage }}>
      {children}
    </Language.Provider>
  )
}

export function useLanguage() {
  const context = useContext(Language);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageSetter');
  }

  return context;
}
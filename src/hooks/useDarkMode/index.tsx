import { useState, useEffect } from 'react';
import useLocalStorage         from "../useLocalStorage";

export default function useDarkMode() {
  const localStorageCache       = useLocalStorage('darkMode');
  const [darkMode, setDarkMode] = useState<number>(0);

  useEffect(function () {
    let mode = localStorageCache.get();

    // Use default mode if mode has not been set by the user
    if (mode === null || mode === undefined) {
      mode = process.env.NEXT_PUBLIC_DARK_MODE;
    }

    setDarkMode(mode ? 1 : 0);
    toggleDocumentDarkMode(mode);
  }, []);

  const toggleDocumentDarkMode = (mode: number) => {
    if (mode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleDarkMode = () => {
    const newMode = darkMode ? 0 : 1;
    toggleDocumentDarkMode(newMode);
    setDarkMode(newMode);
    localStorageCache.set(newMode);
  };

  return {
    setMode:    handleDarkMode,
    isDarkMode: darkMode,
  };
}
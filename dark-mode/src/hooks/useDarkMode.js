import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isLocalDarkMode = localStorage.getItem('isDarkMode');

    if (isLocalDarkMode) {
      setIsDarkMode(isLocalDarkMode === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    localStorage.setItem('isDarkMode', !isDarkMode);
    setIsDarkMode(!isDarkMode);
  }
  
  return {
    isDarkMode,
    toggleDarkMode,
  }
}

export default useDarkMode;

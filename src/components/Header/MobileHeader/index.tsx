import React, { useState } from 'react';
import {
  SunIcon,
  MailIcon,
  MoonIcon,
  ThreeBarsIcon,
} from '@primer/octicons-react';
import useLocalStorage from '../../../hooks/useLocalStorage';

interface Props {}

const MobileHeader: React.FC<Props> = () => {
  const localStorageCache       = useLocalStorage('darkMode');
  const [darkMode, setDarkMode] = useState<boolean>(localStorageCache.get() ? true : false);

  const handleDarkMode = () => {
    const newMode = !darkMode;
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark');
    }
    setDarkMode(newMode);
  };

  const iconColor = darkMode ? 'white' : '#000';

  return (
    <div className="w-full order-2 flex items-center justify-between p-[15px] mb-5 border-solid border-b border-b-borderColor dark:border-b-borderColorLight">
      <button className="flex">
        <ThreeBarsIcon size={24} fill={iconColor} />
      </button>
      <button className="flex">
        <MailIcon size={24} fill={iconColor} />
      </button>
      <button className="flex" onClick={handleDarkMode}>
        <SunIcon size={24} fill={iconColor} />
      </button>
    </div>
  );
};

export default MobileHeader;
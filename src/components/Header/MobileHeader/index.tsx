import React, { useState, useEffect } from 'react';
import {
  SunIcon,
  CodeIcon,
  MoonIcon,
  ThreeBarsIcon,
} from '@primer/octicons-react';
import useDarkMode from '../../../hooks/useDarkMode';

interface Props {}

const MobileHeader: React.FC<Props> = () => {
  const darkMode  = useDarkMode();
  const iconColor = darkMode.isDarkMode ? 'white' : '#000';

  return (
    <div className="w-full order-2 flex items-center justify-between p-[15px] mb-5 border-solid border-b border-b-borderColor dark:border-b-borderColorLight">
      <button className="flex">
        <ThreeBarsIcon size={24} fill={iconColor} />
      </button>
      <button className="flex">
        <CodeIcon  size={24} fill={iconColor} />
      </button>
      <button className="flex toggleDarkModeBtn" onClick={darkMode.setMode}>
        <SunIcon size={24} fill={iconColor} />
      </button>
    </div>
  );
};

export default MobileHeader;
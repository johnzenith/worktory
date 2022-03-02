import React, { useState, useEffect } from 'react';
import useDarkMode                    from '../../../hooks/useDarkMode';
import { BiMoon }                     from 'react-icons/bi';
import { FiSun, FiMoon }              from 'react-icons/fi';
import { GoCode, GoThreeBars }        from 'react-icons/go';

interface Props {}

const MobileHeader: React.FC<Props> = () => {
  const darkMode  = useDarkMode();
  const iconColor = darkMode.isDarkMode ? 'white' : '#000';

  return (
    <div className="mobileHeader w-full order-2 flex items-center justify-between p-[15px] mb-5 border-solid border-b border-b-borderColor dark:border-b-borderColorLight">
      <button className="flex">
        <GoThreeBars size={24} fill={iconColor} />
      </button>
      <button className="flex">
        <GoCode  size={24} fill={iconColor} />
      </button>
      <button className="flex toggleDarkModeBtn" onClick={darkMode.setMode}>
        {darkMode.isDarkMode ?
          <FiSun size={24} fill="#fff" />
          : 
          <BiMoon size={24} />
        }
      </button>
    </div>
  );
};

export default MobileHeader;
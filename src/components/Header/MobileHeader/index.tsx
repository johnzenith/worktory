import React                   from 'react';
import AuthorConfig            from '../../../config/author';
import useDarkMode             from '../../../hooks/useDarkMode';
import { BiMoon }              from 'react-icons/bi';
import { FiSun }               from 'react-icons/fi';
import { GoCode, GoThreeBars } from 'react-icons/go';

interface Props {}

const MobileHeader: React.FC<Props> = () => {
  const darkMode  = useDarkMode();
  const iconColor = darkMode.isDarkMode ? 'white' : '#000';

  return (
    <header className="mobileHeader w-full order-2 flex items-center justify-between p-[15px] md:px-[30px] mb-5 dark:bg-stickyBorder dark:border-0 border-b dark:border-b-borderColorLight bg-[rgba(0,0,0,0.009)] border-b-[rgba(0,0,0,0.02)]">

      <div className="flex flex-1 items-center justify-start">
        {/* <GoThreeBars size={24} fill={iconColor} /> */}
        <span className="font-sans font-medium dark:text-textColorDark">
          {AuthorConfig.site}
        </span>
      </div>

      <button
        aria-label="toggle-dark-mode"
        className="flex items-center justify-end toggleDarkModeBtn"
        onClick={darkMode.setMode}
      >
        {darkMode.isDarkMode ?
          <FiSun size={24} fill="#fff" />
          : 
          <BiMoon size={24} />
        }
      </button>
      
    </header>
  );
};

export default MobileHeader;
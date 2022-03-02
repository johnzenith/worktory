import React, { 
  useRef,
  useState,
  useEffect,
} from 'react';
import clsx               from 'clsx';
import { IoBookOutline }  from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import {
  GoRepo,
  GoFileCode
} from "react-icons/go";

interface Props {
  className?: string;
}

const TabMenu: React.FC<Props> = props => {
  const menuTabElem                       = useRef(null);
  const [menuIndex, setMenuIndex]         = useState(0);
  const [tabBarMargins, setTabBarMargins] = useState({
    marginLeft:  '0',
    marginRight: '0',
  });

  useEffect(() => {
    const firstTabElem = (menuTabElem.current as unknown as HTMLElement)?.querySelectorAll('.menu-tab:first-child')?.[0] as HTMLElement;

    if (firstTabElem) {
      setTabBarMargins({
        marginLeft: '0px',
        marginRight: computeElemWidth(firstTabElem)
      });
    }
  }, []);

  const queryMenuTabs = () => (
    (menuTabElem.current as unknown as HTMLElement)?.querySelectorAll('.menu-tab') || []
  );

  const computeElemWidth = (elem: HTMLElement) => 'calc(100% - ' + elem.offsetWidth + 'px)';

  const menus = [
    {
      icon:    IoBookOutline,
      label:   'Overview',
      content: '',
    },
    {
      icon:    GoRepo,
      label:   'Project',
      count:   20,
      content: '',
    },
    {
      icon:    GoFileCode,
      label:   'Code Gist',
      count:   20,
      content: '',
    },
    {
      icon:    FaRegLightbulb,
      label:   'Quotes',
      count:   25,
      content: '',
    },
  ];

  const handleTabMenu = (index: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
    if (menuIndex === index) return;

    const elem = e.target as HTMLButtonElement;
    const tabs = queryMenuTabs();

    let
      widths      = 0,
      marginLeft  = '0px',
      marginRight = computeElemWidth(elem);
    
    // Compute the menu tab sizes if not tab index is not 0
    if (index > 0) {
      tabs.forEach(function (tab, tabIndex: number) {
        // Ignore the clicked (future-current) tab index
        if (index !== tabIndex) {
          widths += +(tab as HTMLElement).offsetWidth;
        }
      });
    }

    marginRight = 'calc(100% - ' + (+widths + elem.offsetWidth) + 'px)';

    setTabBarMargins({
      marginLeft,
      marginRight,
    });

    console.log(marginLeft, marginRight);
    setMenuIndex(index);

    // Show the settings content
  };

  return (
    <div className="mx-auto w-full tab-menu-wrapper">
      <div
        ref={menuTabElem}
        className={clsx('horizontal-menu-tabs w-full overflow-x-auto flex items-center justify-center px-15 mx-auto border-solid mt-[17px] flex-row h-[40px] border-b border-borderColor dark:border-borderColorLight', props?.className || '')}
      >

        {menus.map((menu, index: number) => (
          <button
            key={menu.label}
            onClick={handleTabMenu(index)}
            className={clsx('menu-tab flex items-center box-border h-auto font-sans dark:text-textColorDark text-sm py-[8px] border-solid transition-all duration-300 w-auto px-5 border-b-2 border-transparent', menuIndex === index ? 'is-tab-active font-medium' : '')}
          >
            {<menu.icon size={16} />}
            <span className="ml-[6px]">
              {menu.label}
            </span>
          </button>
        ))}
      </div>

      <span style={tabBarMargins} className="tab-bar"></span>
    </div>
  );
};

export default TabMenu;
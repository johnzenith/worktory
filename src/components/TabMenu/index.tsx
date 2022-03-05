import React, { 
  useRef,
  useState,
  useEffect,
} from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { IconType } from "react-icons";

import ScreenConfig from '../../config/screen';

type TabMenuMarginsType = {
  marginLeft:  number | string;
  marginRight: number | string;
}

type MenuType = {
  icon:    IconType;
  link:    string;
  count?:  number;
  label?:  string;
  content: React.ReactNode;
}

interface Props {
  menus:      MenuType[];
  className?: string;
}

const TabMenu: React.FC<Props> = props => {
  const menus                             = props.menus;
  const menuTabElem                       = useRef(null);
  const [menuIndex, setMenuIndex]         = useState(0);
  const [tabBarMargins, setTabBarMargins] = useState<TabMenuMarginsType>({
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

    // On scroll
    window.addEventListener('scroll', () => {

    });
  }, []);

  const queryMenuTabs = () => (
    (menuTabElem.current as unknown as HTMLElement)?.querySelectorAll('.menu-tab') || []
  );

  const computeElemWidth = (elem: HTMLElement) => 'calc(100% - ' + elem.offsetWidth + 'px)';

  const getMenuTabByChild = (elem: HTMLElement) => (
    elem.classList.contains('menu-tab') ? elem : elem.closest('.menu-tab')
  );

  const handleTabMenu = (index: number) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (menuIndex === index) return;

    const elem = getMenuTabByChild(e.target as HTMLAnchorElement) as HTMLElement;
    const tabs = queryMenuTabs();

    let
      widths      = 0,
      marginLeft  = '0px',
      marginRight = computeElemWidth(elem);
    
    // Compute the menu tab sizes if not tab index is not 0
    if (index > 0) {
      tabs.forEach(function (tab, tabIndex: number) {
        // Ignore the clicked (future-current) tab index
        if (tabIndex < index) {
          widths += +(tab as HTMLElement).offsetWidth;
        }
      });

      marginLeft  = `${widths}px`;
      marginRight = 'calc(100% - ' + (+widths + elem.offsetWidth) + 'px)';
    }

    setTabBarMargins({
      marginLeft,
      marginRight,
    });

    setMenuIndex(index);
  };

  return (
    <React.Fragment>
      <div
        className={clsx(
          'tab-menu-wrapper mx-auto w-full md:max-w-full pb-[1px] overflow-x-auto overflow-y-hidden',
          ScreenConfig.mobile.alignLeft ? '' : 'max-w-[452px]',
        )}
      >
        <nav
          ref={menuTabElem}
          className={clsx(
            'horizontal-menu-tabs w-full min-w-[452px] overflow-visible flex items-center  md:justify-start mx-auto md:mx-0 border-solid mt-[17px] md:mt-2 flex-row h-auto border-b border-borderColor dark:border-borderColorLight',
            ScreenConfig.mobile.alignLeft ? '' : 'justify-center',
            props?.className || ''
          )}
        >

          {menus.map((menu, index: number) => (
            <Link
              key={menu.label}
              href={menu.link}
            >
              <a
                onClick={handleTabMenu(index)}
                className={clsx('menu-tab min-w-fit flex items-center box-border h-auto font-sans dark:text-textColorDark text-sm py-[8px] border-solid transition-all duration-300 w-auto px-5 border-b-2 border-transparent focus-visible:!outline-none', menuIndex === index ? 'is-tab-active font-medium' : '')}
              >
                {<menu.icon size={16} />}
                <span className="ml-[6px] font-sans dark:text-textColorDark text-sm">
                  {menu.label}
                </span>
              </a>
            </Link>
          ))}
        </nav>

        <span style={tabBarMargins} className="tab-bar"></span>
      </div>

      <main className="w-full">
        {menus[menuIndex].content}
      </main>
    </React.Fragment>
  );
};

export default TabMenu;
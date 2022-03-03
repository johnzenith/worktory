import React   from 'react';
import TabMenu from '../../TabMenu';
import { VscOutput } from "react-icons/vsc";
import {
  FaLaptopCode,
  FaRegLightbulb,
} from "react-icons/fa";
import { GoRepo } from "react-icons/go";

import ProfileOverview from '../../Content/ProfileOverview';

interface Props {}

const Header: React.FC<Props> = () => {

    const menus = [
    {
      icon:    VscOutput,
      link:    '/',
      label:   'Overview',
      content: <ProfileOverview />,
    },
    {
      icon:    GoRepo,
      link:    '/',
      label:   'Project',
      count:   20,
      content: '2',
    },
    {
      icon:    FaLaptopCode,
      link:    '/',
      label:   'Code Gist',
      count:   20,
      content: '3',
    },
    {
      icon:    FaRegLightbulb,
      link:    '/',
      label:   'Insight',
      count:   25,
      content: '4',
    },
  ];

  return (
    <div className="w-full order-2 flex flex-col items-center justify-start px-[15px]">
      <div className="flex-none w-[296px] hidden md:block"></div>
      
      <TabMenu menus={menus} className="mt-[30px]" />
    </div>
  );
};

export default Header;
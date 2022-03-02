import React   from 'react';
import TabMenu from '../../TabMenu';

interface Props {}

const Header: React.FC<Props> = props => {

  return (
    <header className="w-full order-2 flex items-center justify-start">
      <div className="flex-none w-[296px] hidden md:block"></div>

      <TabMenu />
    </header>
  );
};

export default Header;
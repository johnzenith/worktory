import React          from 'react';
import DefaultSidebar from './DefaultSidebar';

interface Props {}

const Sidebar: React.FC<Props> = props => {

  return (
    <aside className="w-full max-w-[296px] flex flex-col flex-none">
      <DefaultSidebar />
    </aside>
  );
};

export default Sidebar;
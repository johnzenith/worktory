import React          from 'react';
import DefaultSidebar from './DefaultSidebar';

interface Props {}

const Sidebar: React.FC<Props> = () => {

  return (
    <React.Fragment>
      <DefaultSidebar />
    </React.Fragment>
  );
};

export default Sidebar;
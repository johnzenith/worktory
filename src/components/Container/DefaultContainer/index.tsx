import React        from 'react';
import Header       from '../../Header';
import Sidebar      from '../../Sidebar';
import MobileHeader from '../../Header/MobileHeader';

interface Props {}

const DefaultContainer: React.FC<Props> = () => {

  return (
    <div className="w-full min-h-[100vh] flex flex-col dark:bg-darkColor transition-colors duration-100 pb-[20px]">
      <div className="w-full flex items-center">
        <MobileHeader />
      </div>
      <div className="w-full flex flex-col md:flex-row-reverse items-center md:items-start justify-start">
        <Header />
        <Sidebar />
      </div>
    </div>
  );
};

export default DefaultContainer;
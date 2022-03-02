import React   from 'react';
import Header  from '../../Header';
import Footer  from '../../Footer';
import Content from '../../Content';
import Sidebar from '../../Sidebar';

interface Props {}

const DefaultContainer: React.FC<Props> = () => {

  return (
    <div className="w-full min-h-[100vh] flex flex-col dark:bg-darkColor transition-colors duration-300">
      <div className="w-full flex flex-col items-center justify-start">
        <Header />
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultContainer;
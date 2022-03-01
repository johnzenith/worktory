import React   from 'react';
import Header  from '../../Header';
import Footer  from '../../Footer';
import Content from '../../Content';
import Sidebar from '../../Sidebar';

interface Props {}

const DefaultContainer: React.FC<Props> = props => {

  return (
    <div className="w-full">
      <Header />
      <div className="w-full flex items-center justify-start">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultContainer;
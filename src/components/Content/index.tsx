import React          from 'react';
import DefaultContent from './DefaultContent';

interface Props {}

const Content: React.FC<Props> = props => {

  return (
    <div className="w-full">
      <DefaultContent />
    </div>
  );
};

export default Content;
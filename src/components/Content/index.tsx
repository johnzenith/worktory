import React          from 'react';
import DefaultContent from './DefaultContent';

interface Props {}

const Content: React.FC<Props> = () => {

  return (
    <React.Fragment>
      <DefaultContent />
    </React.Fragment>
  );
};

export default Content;
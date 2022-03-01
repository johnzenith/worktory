import React from 'react';
import DefaultContainer from './DefaultContainer';

interface Props {}

const Container: React.FC<Props> = props => {

  return (
    <div className="w-full flex items-center justify-start">
      <DefaultContainer />
    </div>
  );
};

export default Container;
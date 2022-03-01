import React from 'react';
import DefaultContainer from './DefaultContainer';

interface Props {}

const Container: React.FC<Props> = props => {

  return (
    <React.Fragment>
      <DefaultContainer />
    </React.Fragment>
  );
};

export default Container;
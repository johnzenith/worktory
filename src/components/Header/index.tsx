import React         from 'react';
import DefaultHeader from './DefaultHeader';

interface Props {}

const Header: React.FC<Props> = props => {

  return (
    <React.Fragment>
      <DefaultHeader />
    </React.Fragment>
  );
};

export default Header;
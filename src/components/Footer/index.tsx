import React         from 'react';
import DefaultFooter from './DefaultFooter';

interface Props {}

const Footer: React.FC<Props> = props => {

  return (
    <React.Fragment>
      <DefaultFooter />
    </React.Fragment>
  );
};

export default Footer;
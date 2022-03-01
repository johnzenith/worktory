import React        from 'react';
import ProfileImage from '../../Image/ProfileImage';

interface Props {}

const DefaultSidebar: React.FC<Props> = props => {

  return (
    <div className="w-full max-w-[296px] flex flex-col flex-none">
      <ProfileImage />
      Default sidebar
    </div>
  );
};

export default DefaultSidebar;
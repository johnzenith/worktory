import React     from 'react';
import FullImage from '../../Image/FullImage';

interface Props {}

const Header: React.FC<Props> = () => {

  return (
    <div className="w-full order-2 flex items-center justify-between">
      <button className="w-[40px] min-h-[40px] flex">
        <FullImage
          src="/menu-icon.svg"
        />
      </button>
    </div>
  );
};

export default Header;
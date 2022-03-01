import React       from 'react';
import ImageConfig from '../../../config/ImageConfig';

interface Props {}

const Header: React.FC<Props> = props => {

  return (
    <header className="w-full flex items-center justify-start">
      <div className={`flex-none w-[${ImageConfig.WIDTH}px]`}></div>

      <ul className="w-full flex-1 list-none">
        <li className="m-0 p-0 list-none max-w-fit h-auto min-h-[45px]">
          <button className="flex py-10 px-15 font-sans font-bold">
            Button
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
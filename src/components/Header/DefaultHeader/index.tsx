import React       from 'react';
import ImageConfig from '../../../config/ImageConfig';

interface Props {}

const Header: React.FC<Props> = props => {

  return (
    <header className="w-full order-2 flex items-center justify-start">
      <div className="flex-none w-[296px]"></div>

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
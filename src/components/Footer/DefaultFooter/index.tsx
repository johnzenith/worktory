import React           from 'react';
import Link            from 'next/link';
import AuthorConfig    from '../../../config/author';
import { AiFillHeart } from "react-icons/ai";

interface Props {}

const DefaultFooter: React.FC<Props> = props => {
  return (
    <div className="w-full flex items-center justify-center mt-[100px]">
      <div className="flex items-center font-sans dark:text-headerTextColor text-sm">
        Made with 
        <span className="mx-[5px]">
          <AiFillHeart fill="#cd3c1a" size={18} />
        </span>
        by
        <Link href="/">
          <a className="ml-[5px] font-medium hover:underline">
            {AuthorConfig.name}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DefaultFooter;
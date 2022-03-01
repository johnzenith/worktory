import React        from 'react';
import ProfileImage from '../../Image/ProfileImage';

interface Props {}

const DefaultSidebar: React.FC<Props> = props => {

  return (
    <aside className="w-full order-1 md:max-w-[296px] flex flex-col flex-none py-[20px]">
      <div className="w-full flex items-center">
        <ProfileImage />
        <div className="w-full justify-center max-w-fit flex flex-col items-start pl-[15px]">
          <h1
            className="m-0 p-0 font-sans text-[1.6em] md:text-[2em] font-[600] dark:text-[#fff]">
            John Zenith
          </h1>
          <h4 className="mt-[-3px] font-sans text-[1em] md:text-[1.4em] dark:text-[#fff]">
            JavaScript Engineer
          </h4>
        </div>
      </div>
    </aside>
  );
};

export default DefaultSidebar;
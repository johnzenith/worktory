import React        from 'react';
import Badge        from '../../Badge';
import MobileHeader from '../../Header/MobileHeader';
import ProfileImage from '../../Image/ProfileImage';

interface Props {}

const DefaultSidebar: React.FC<Props> = () => {
  return (
    <aside className="w-full order-1 md:max-w-[296px] flex flex-col flex-none">
      <div className="w-full flex md:hidden items-center">
        <MobileHeader />
      </div>

      <div className="w-full flex items-center justify-center px-[15px]">
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

      <div className="w-full flex flex-col items-center px-[15px] justify-center max-w-[500px] mx-auto">
        <div className="w-full flex items-center py-[4px] px-[15px] mt-5 border-solid border border-borderColor dark:border-borderColorLight rounded-[6px] font-sans text-sm text-[#000] dark:text-white max-w-fit">
          JavaScript Engineer, PHP Expert, WordPress Enthusiast
        </div>

        <div className="w-full max-w-fit flex items-center justify-between mt-2">
          <Badge label="Frontend Developer" />
          <Badge label="Backend Developer" className="justify-end" />
        </div>
      </div>
    </aside>
  );
};

export default DefaultSidebar;
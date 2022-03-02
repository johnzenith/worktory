import React            from 'react';
import Badge            from '../../Badge';
import Author           from '../../Author';
import Tagline          from '../../Tagline';
import ProfileLinks     from '../../ProfileLinks';
import MobileHeader     from '../../Header/MobileHeader';
import OpenToWorkButton from '../../Button/OpenToWorkButton';

interface Props {}

const DefaultSidebar: React.FC<Props> = () => {
  return (
    <aside className="w-full order-1 md:max-w-[296px] flex flex-col flex-none">
      <div className="w-full flex md:hidden items-center">
        <MobileHeader />
      </div>

      <Author
        authorName="John Zenith"
        profession="JavaScript Engineer"
      />

      <div className="w-full flex flex-col items-center px-[15px] justify-center max-w-[500px] mx-auto">
        <Tagline
          label="JavaScript Engineer, PHP Expert, WordPress Enthusiast"
        />

        <div className="w-full max-w-fit flex items-center justify-between mt-2">
          <Badge label="Frontend Developer" className="mr-[15px]" />
          <Badge label="Backend Engineer" className="justify-end" />
        </div>

        <OpenToWorkButton />
        <ProfileLinks />
      </div>
    </aside>
  );
};

export default DefaultSidebar;
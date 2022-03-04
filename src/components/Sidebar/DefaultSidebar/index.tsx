import React         from 'react';
import Badge         from '../../Badge';
import Author        from '../../Author';
import Tagline       from '../../Tagline';
import ProfileLinks  from '../../ProfileLinks';
import MobileHeader  from '../../Header/MobileHeader';
import DefaultButton from '../../Button/DefaultButton';

interface Props {}

const DefaultSidebar: React.FC<Props> = () => {
  return (
    <aside className="w-full order-1 md:order-none md:max-w-min flex flex-col flex-none">
      {/* <div className="w-full flex md:hidden items-center">
        <MobileHeader />
      </div> */}

      <Author
        authorName="John Musa"
        profession="JavaScript Engineer"
      />

      <div className="w-full flex flex-col items-center px-[15px] md:px-[30px] justify-center max-w-[500px] md:max-w-full mx-auto">
        <Tagline
          label="JavaScript Engineer, PHP Expert, WordPress Enthusiast"
        />

        <div className="w-full max-w-fit md:max-w-full flex md:flex-col items-center justify-between md:justify-start mt-3">
          <Badge label="Frontend Developer" className="md:w-full mr-[15px] md:mb-2 md:mr-0 justify-start" />
          <Badge label="Backend Engineer" className="justify-end md:w-full md:justify-start" />
        </div>

        <DefaultButton label="Open To Work" />
        <ProfileLinks />
      </div>
    </aside>
  );
};

export default DefaultSidebar;
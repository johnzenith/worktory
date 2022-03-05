import React         from 'react';
import clsx          from 'clsx';
import Badge         from '../../Badge';
import Author        from '../../Author';
import Tagline       from '../../Tagline';
import ProfileLinks  from '../../ProfileLinks';
import AuthorConfig  from '../../../config/author';
import ScreenConfig  from '../../../config/screen';
import DefaultButton from '../../Button/DefaultButton';

interface Props {}

const DefaultSidebar: React.FC<Props> = () => {
  return (
    <aside className="defaultSidebar w-full order-1 md:order-none md:max-w-min flex flex-col flex-none">
      <Author
        name={AuthorConfig.name}
        role={AuthorConfig.role}
      />

      <div
        className={clsx(
          'w-full flex flex-col items-center px-[15px] md:px-[30px] justify-center md:max-w-full mx-auto',
          ScreenConfig.mobile.alignLeft ? '' : 'max-w-[500px]'
        )}
      >
        <Tagline
          label={AuthorConfig.description}
          className="md:py-[5px]"
        />

        <div
          className={clsx(
            'w-full md:max-w-full flex md:flex-col items-center md:justify-start mt-3',
            ScreenConfig.mobile.alignLeft ? '' : 'max-w-fit justify-between'
          )}
        >
          <Badge label="Frontend Developer" className="md:w-full mr-[15px] md:mb-2 md:mr-0 justify-start" />
          <Badge label="Backend Engineer" className="justify-end md:w-full md:justify-start" />
        </div>

        <DefaultButton
          label="Open To Work"
          className={clsx(
            ScreenConfig.mobile.alignLeft ? 'max-w-full !justify-start block pl-[15px]' : ''
          )}
        />

        <ProfileLinks />
      </div>
    </aside>
  );
};

export default DefaultSidebar;
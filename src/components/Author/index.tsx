import React        from 'react';
import Flags        from 'country-flag-icons/react/3x2';
import clsx         from 'clsx';
import ProfileImage from '../Image/ProfileImage';
import AuthorConfig from '../../config/author';
import ScreenConfig from '../../config/screen';

interface Props {
  role:       React.ReactNode;
  name:       React.ReactNode;
  className?: string;
}

const Author: React.FC<Props> = props => {
  const countryFlag = Flags?.[AuthorConfig.countryCode];

  return (
    <div
      className={clsx(
        'w-full flex md:flex-col items-center px-[15px] md:px-[30px]',
        ScreenConfig.mobile.alignLeft ? '' : 'justify-center ',
        props.className
      )}
    >
      <ProfileImage />
      <div className="w-full justify-center max-w-fit md:max-w-full flex flex-col items-start pl-[15px]">
        <h1
          className="m-0 p-0 font-sans text-[1.6em] md:text-[2em] font-[600] dark:text-textColorDark">
          {props.name}
        </h1>
        <h2 className="mt-[-3px] font-sans text-[1em] md:text-[1.25em] dark:text-textColorDark">
          {props.role}
        </h2>
        <div className="flex items-center mt-[5px]">
          {countryFlag({
            title:     AuthorConfig.country,
            className: 'w-[20px] h-[20px]',
          })}
          <span className="ml-[5px] font-sans text-[0.93em] dark:text-textColorDark">
            {AuthorConfig.city},
            {' '}
            {AuthorConfig.country}.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Author;
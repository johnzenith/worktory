import React        from 'react';
import clsx         from 'clsx';
import ProfileImage from '../Image/ProfileImage';

interface Props {
  authorName: React.ReactNode;
  profession: React.ReactNode;
  className?: string;
}

const Author: React.FC<Props> = props => {
  return (
    <div className={clsx('w-full flex md:flex-col items-center justify-center px-[15px] md:px-[30px]', props.className)}>
      <ProfileImage />
      <div className="w-full justify-center max-w-fit md:max-w-full flex flex-col items-start pl-[15px]">
        <h1
          className="m-0 p-0 font-sans text-[1.6em] md:text-[2em] font-[600] dark:text-textColorDark">
          {props.authorName}
        </h1>
        <h2 className="mt-[-3px] font-sans text-[1em] md:text-[1.4em] dark:text-textColorDark">
          {props.profession}
        </h2>
      </div>
    </div>
  );
};

export default Author;
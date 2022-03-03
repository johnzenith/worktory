import React from 'react';
import clsx from 'clsx';

interface Props {
  label?:     React.ReactNode;
  className?: string;
}

const OpenToWorkButton: React.FC<Props> = props => {
  return (
    <button
      aria-label="Open To Work"
      className={clsx('mt-4 w-full max-w-[389px] flex min-h-[30px] items-center font-sans font-medium text-sm text-textColorDark justify-center border border-solid border-borderColorDark dark:border-borderColorLight dark:hover:border-borderColorHover bg-buttonBackground hover:bg-buttonBackgroundHover transition-colors rounded-[6px]', props?.className || '')}
    >
      {props.label || 'Open To Work'}
    </button>
  );
};

export default OpenToWorkButton;
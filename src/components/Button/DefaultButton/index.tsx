import React from 'react';
import clsx  from 'clsx';
import Link  from 'next/link';

interface Props {
  label:          React.ReactNode;
  linkTo?:        string;
  onClick?:       () => void;
  ariaLabel?:     string;
  className?:     string;
  linkClassName?: string;
}

const DefaultButton: React.FC<Props> = props => {
  const renderButton = (
    <button
      onClick={props?.onClick}
      aria-label={(props?.ariaLabel || props.label) as string}
      className={clsx('mt-4 w-full max-w-[389px] flex min-h-[30px] items-center font-sans font-medium text-sm text-textColorDark justify-center border border-solid border-borderColorDark dark:border-borderColorLight dark:hover:border-borderColorHover bg-buttonBackground hover:bg-buttonBackgroundHover transition-colors rounded-[6px]', props?.className || '')}
    >
      {props.label}
    </button>
  );

  return props?.linkTo ? 
    <Link href={props.linkTo}>
      <a className={props.linkClassName}>
        {renderButton}
      </a>
    </Link>
    :
    renderButton;
};

export default DefaultButton;
import React         from 'react';
import clsx          from 'clsx';
import { CheckIcon } from '@primer/octicons-react';

interface Props {
  label:      React.ReactNode;
  className?: string;
}

const Badge: React.FC<Props> = props => {

  return (
    <div className={clsx('flex font-sans text-sm dark:text-[#fff]', props?.className || '')}>
      <span className="flex items-center justify-center w-[17px] h-[17px] rounded-full bg-success mr-[5px]">
        <CheckIcon size={12} fill="#fff" />
      </span>
      {props.label}
    </div>
  );
};

export default Badge;
import React      from 'react';
import clsx       from 'clsx';
import { GoCheck} from 'react-icons/go';

interface Props {
  label:      React.ReactNode;
  className?: string;
}

const Badge: React.FC<Props> = props => {

  return (
    <div className={clsx('flex font-sans text-sm dark:text-textColorDark', props?.className || '')}>
      <span className="flex items-center justify-center w-[17px] h-[17px] rounded-full bg-success mr-[5px]">
        <GoCheck size={12} fill="#fff" />
      </span>
      {props.label}
    </div>
  );
};

export default Badge;
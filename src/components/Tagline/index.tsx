import React        from 'react';
import clsx         from 'clsx';
import ScreenConfig from '../../config/screen';

interface Props {
  label:      React.ReactNode;
  className?: string;
}

const Tagline: React.FC<Props> = props => {

  return (
    <div
      className={clsx(
        'w-full flex items-center py-[4px] px-[15px] mt-5 border-solid border border-borderColor dark:border-borderColorLight rounded-[6px] font-sans text-sm text-[#000] dark:text-white ',
        ScreenConfig.mobile.alignLeft ? '' : 'justify-center max-w-fit',
        props.className || ''
      )}
    >
      <span className="mr-1">🎯</span>
      {props.label}
    </div>
  );
};

export default Tagline;
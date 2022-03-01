import React from 'react';
import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';

export type Props = {
  src:        ImageProps['src'];
  alt?:       string;
  width?:     number;
  height?:    number;
  quality?:   number;
  layout?:    ImageProps['layout'];
  className?: string;
  onClick?: (e: any) => void;
};

const FullImage: React.FC<Props> = props => {
  const dimension = props?.layout ? 
    { layout: props?.layout as ImageProps['layout'] } 
    : 
    {
      width: props?.width   || 100,
      height: props?.height || 100,
    };

  return <Image 
    className={clsx(props?.className || '')}
    alt={props?.alt} 
    src={props?.src} 
    quality={props?.quality || 100}
    {...dimension}
    onClick={props?.onClick}
  />;
};

export default FullImage;
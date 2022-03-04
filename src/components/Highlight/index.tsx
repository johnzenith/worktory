import React, { useState }  from 'react';
import clsx                 from 'clsx';
import { IconType }         from "react-icons";
import { FiLayers }         from "react-icons/fi";
import { VscPreview }       from "react-icons/vsc";
import { FaGripHorizontal } from "react-icons/fa";

import colors, { ColorType } from '../../config/colors';

export interface Props {
  icon?:        IconType;
  tags?:        React.ReactNode[];
  label:        React.ReactNode;
  badge?:       string;
  toggle?:      boolean;
  className?:   string;
  description?: React.ReactNode;
}

const Highlight: React.FC<Props> = props => {
  const [hidden, setHidden] = useState(false);

  const icon = props.icon ?
    <props.icon size={16} /> : <FiLayers size={16} />;

  const getColor = (tag: string) => {
    const sanitizeTag = tag.toLowerCase().replace(/[^a-z]/g, '') as ColorType;
    return colors?.[sanitizeTag] || colors.default;
  }

  const handleHighlight = () => {
    setHidden(!hidden);
  };
  
  return (
    <div className={clsx('mt-4 w-full flex flex-col min-h-[50px] items-center p-[16px] border border-solid border-borderColorHover dark:border-borderColorLight rounded-[6px]', props?.className || '')}>
      
      <div className="w-full flex flex-col justify-between h-full">
        <h2 className="w-full flex items-start m-0 font-sans font-medium">
          <div className="w-full flex items-center flex-1">
            <span className="mr-[5px] dark:text-borderColorHover">
            {icon}
            </span>
            <span className="textColorEmphasis dark:text-textColor mr-[6px]">
              {props.label}
            </span>
            {props?.badge && 
              <span className="flex max-w-fit py-[1px] px-[6px] rounded-[15px] text-buttonBackgroundHover dark:text-borderColorHover border border-solid border-borderColorHover dark:border-borderColorLight font-sans text-[12px]">
                {props.badge}
              </span>
            }
          </div>
          
          {props.toggle &&
            <button 
              aria-label="toggle-content"
              onClick={handleHighlight}
              className="w-[16px] flex items-center"
            >
              <span className={clsx(
                'mr-[5px] text-buttonBackgroundHover dark:text-borderColorHover',
                hidden ? 'rotate-[90deg]' : ''
              )}>
                <FaGripHorizontal size={16} />
              </span>
            </button>
          }
        </h2>

        <div className={clsx('w-full flex-col justify-between h-full', hidden ? 'hidden' : 'flex')}>

          {props?.description && 
            <div className="highlight-desc flex flex-wrap w-full mt-3 mb-[-20px] text-buttonBackgroundHover dark:text-borderColorHover font-sans text-sm">
              {props.description}
            </div>
          }

          {props?.tags &&
            <div className="w-full flex mt-4">
              {props.tags.map((tag, index: number) => (
                <div key={`tag-${index}`} className="flex items-center w-auto mr-[10px]">
                  <span
                    style={{
                      backgroundColor: getColor(tag as ColorType)
                    }}
                    className="block w-[11px] h-[11px] rounded-full mr-[3px]"
                  ></span>
                  <span className="font-sans text-[12px] dark:text-textColorDark">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Highlight;
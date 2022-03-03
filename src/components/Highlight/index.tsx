import React                from 'react';
import clsx                 from 'clsx';
import { IconType }         from "react-icons";
import { FiLayers }         from "react-icons/fi";
import { VscPreview }       from "react-icons/vsc";
import { FaGripHorizontal } from "react-icons/fa";

interface Props {
  icon?:        IconType;
  tags?:        React.ReactNode[];
  label:        React.ReactNode;
  badge?:       string;
  toggle?:      boolean;
  className?:   string;
  description?: React.ReactNode;
}

const Highlight: React.FC<Props> = props => {
  const icon = props.icon ?
    <props.icon size={16} /> : <FiLayers size={16} />;
  
  return (
    <div className={clsx('mt-4 w-full flex flex-col min-h-[50px] items-center p-[16px] border border-solid border-borderColorHover dark:border-borderColorLight rounded-[6px]', props?.className || '')}>
      
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
          <button className="w-[16px] flex items-center">
            <span className="mr-[5px] text-buttonBackgroundHover dark:text-borderColorHover">
              <FaGripHorizontal size={16} />
            </span>
          </button>
        }
      </h2>

      {props?.description && 
        <div className="flex w-full mt-3 text-buttonBackgroundHover dark:text-borderColorHover font-sans text-sm">
          {props.description}
        </div>
      }

      {props?.tags &&
        <div className="w-full">
          {props.tags.map((tag, index: number) => (
            <div key={`tag-${index}`} className="flex items-center w-auto mr-[12px]">
              <span className="block w-[12px] h-[12px] rounded-full mr-[3px]"></span>
              <span className="font-sans text-[12px] dark:text-textColorDark">
                {tag}
              </span>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Highlight;
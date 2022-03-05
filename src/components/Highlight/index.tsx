import React, { useState }  from 'react';
import clsx                 from 'clsx';
import ReactPlayer          from 'react-player';
import { IconType }         from "react-icons";
import { FiLayers }         from "react-icons/fi";
import { VscPreview }       from "react-icons/vsc";
import { 
  GoChevronUp,
  GoChevronDown,
 }       from "react-icons/go";
import {
  FaExpand,
  FaCompress,
  FaGripHorizontal,
  FaRegTimesCircle,
} from "react-icons/fa";

import DefaultButton         from '../Button/DefaultButton';
import colors, { ColorType } from '../../config/colors';

export enum ValidUrlType {
  Link  = 'LINK',
  Image = 'IMAGE',
  Video = 'VIDEO',
};

type HighlightUrlType = {
  url:   string;
  type:  ValidUrlType;
  label: string;
}

export interface Props {
  urls?:        HighlightUrlType[];
  icon?:        IconType;
  tags?:        React.ReactNode[];
  label:        React.ReactNode;
  badge?:       string;
  toggle?:      boolean;
  shrink?:      (shrink: boolean) => void;
  className?:   string;
  description?: React.ReactNode;
}

const Highlight: React.FC<Props> = props => {
  const [hidden, setHidden]       = useState(false);
  const [shrink, setShrink]       = useState(false);
  const [showVideo, setShowVideo] = useState('');

  const icon = props.icon ?
    <props.icon size={16} /> : <FiLayers size={16} />;

  const getColor = (tag: string) => {
    const sanitizeTag = tag.toLowerCase().replace(/[^a-z]/g, '') as ColorType;
    return colors?.[sanitizeTag] || colors.default;
  }

  const handleHighlight = () => {
    setHidden(!hidden);
  };

  const handleShrinkContent = () => {
    const isShrink = !shrink;
    setShrink(isShrink);
    props.shrink && props.shrink(isShrink);
  };

  const handleUrlButton = (url: HighlightUrlType) => () => {
    setShowVideo(url.url);
    // alert(`View ${url.type}`);
  };

  const handleImage = (url: HighlightUrlType) => () => {
    // Handle image
  };

  const handleCloseVideo = () => {
    setShowVideo('');
  };
  
  return (
    <React.Fragment>
      <div 
        className={clsx(
          'mt-4 w-full flex flex-col min-h-[50px] items-center p-[16px] border border-solid border-borderColorHover dark:border-borderColorLight rounded-[6px]',
          hidden ? 'h-auto' : 'h-full',
          props?.className || ''
        )}
      >
        
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
            
            {props.shrink && 
              <button 
                aria-label="shrink-content"
                onClick={handleShrinkContent}
                className="w-[16px] flex items-center mr-[10px]"
              >
                <span className="mr-[5px] mt-[-2px] text-buttonBackgroundHover dark:text-borderColorHover">
                  {shrink  && <GoChevronDown size={18} />}
                  {!shrink && <GoChevronUp size={18} />}
                </span>
              </button>
            }
            
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

          <div 
            className={clsx(
              'w-full flex-col justify-between h-full',
              hidden ? 'hidden' : 'flex'
            )}
          >

            {props?.description && 
              <div className="highlight-desc flex flex-wrap w-full mt-3 text-buttonBackgroundHover dark:text-borderColorHover font-sans text-sm">
                {props.description}
              </div>
            }

            {props.urls && 
              <div className="flex w-full items-center mt-[-3px] mb-[10px]">
                {props.urls.filter(url => url.url !== '#').map((url, index: number) => {
                  const isLink      = url.type === ValidUrlType.Link;
                  const linkTo = isLink ? { linkTo: url.url } : {};
                  
                  const handleClick = isLink ?
                    undefined
                    :
                    (ValidUrlType.Video === url.type ? handleUrlButton(url) : handleImage(url));

                  return (
                    <DefaultButton
                      key={`url-btn-${index}`}
                      {...linkTo}
                      onClick={handleClick}
                      label={url.label}
                      className="w-auto max-w-fit mr-[10px] min-h-fit py-[1px] px-[8px] text-[12px]"
                    />
                  );
                })}
              </div>
            }

            {props?.tags &&
              <div className="w-full flex flex-wrap">
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

      {showVideo.length > 0 && 
        <div className="video-player fixed flex flex-col items-center justify-center h-[100vh] w-[100vw] left-0 top-0 z-[999999] bg-[rgba(0,0,0,0.85)] dark:bg-[rgba(255,255,255,0.9)]">
          <div className="w-full max-w-[90vw] flex justify-end mb-[10px]">
            <button
              onClick={handleCloseVideo}
              className="items-center"
            >
              <FaRegTimesCircle size={24} fill="#161b22" />
            </button>
          </div>

          <ReactPlayer
            url={showVideo}
            controls={true}
            volume={1}
            playing={true}
            width="90vw"
            height="80vh"
          />
        </div>
      }
    </React.Fragment>
  );
};

export default Highlight;
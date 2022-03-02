import React from 'react';
import clsx  from 'clsx';
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaRegEnvelope,
} from 'react-icons/fa';

interface Props {
  className?: string;
}

const ProfileLinks: React.FC<Props> = props => {

  const links = [
    {
      link:     'mailto:john.zenith.me@gmail.com',
      icon:     FaRegEnvelope,
      label:    'Mail',
      useTitle: 'Contact Me',
    },
    {
      link:  'https://github.com/johnzenith',
      icon:  FaGithub,
      label: 'GitHub',
    },
    {
      link:  'https://twitter.com/john_zenith',
      icon:  FaTwitter,
      label: 'Twitter',
    },
    {
      link:  'https://www.linkedin.com/in/john-zenith-643336160/',
      icon:  FaLinkedinIn,
      label: 'LinkedIn',
    },
  ];

  const renderLinks = links.map(link => {
    const isMail = 'Mail' === link.label;
    const rel    = isMail ? {} : { rel: 'noreferrer', target: '_blank' };
    
    return (
      <a
        key={link.label}
        className="w-full flex font-sans text-sm mt-1 dark:text-[#fff] hover:!text-textColorEmphasis hover:underline transition-all"
        href={link.link}
        {...rel}
      >
        <span className="flex items-center w-[22px] !text-headerTextColor profileLinkText">
          <link.icon size={14} />
        </span>
        {isMail ? link.useTitle : link.link}
      </a>
    );
  });

  return (
    <div className={clsx('flex mt-4 w-full flex-col items-center max-w-[389px]', props?.className || '')}>
      {renderLinks}
    </div>
  );
};

export default ProfileLinks;
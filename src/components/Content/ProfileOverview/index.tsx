import React         from 'react';
import Highlight from '../../Highlight';
import {
  DiReact,
  DiNodejsSmall,
  DiJavascript1,
} from 'react-icons/di';

interface Props {}

const ProfileOverview: React.FC<Props> = () => {

  const technologies = [
    {
      name: 'JavaScript',
      icon: DiJavascript1,
    },
    {
      name: 'ReactJS',
      icon: DiReact,
    },
    {
      name: 'NodeJS',
      icon: DiNodejsSmall,
    },
  ];

  const renderDescription = technologies.map(technology => (
    <span key={technology.name} className="flex items-center mr-3">
      {<technology.icon size={16} />}
      {technology.name}
    </span>
  ));

  return (
    <div className="w-full flex items-center justify-start my-7 mx-auto">
      <Highlight 
        toggle={true}
        badge="Active"
        label="Technologies"
        description={renderDescription}
      />
    </div>
  );
};

export default ProfileOverview;
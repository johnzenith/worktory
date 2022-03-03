import React     from 'react';
import Highlight from '../../Highlight';

interface Props {}

const PinnedProjects: React.FC<Props> = () => {
  const pinnedProjects = [
    {
      tags:        ['React', 'Firebase'],
      title:       'Kingso- ERP',
      description: 'Demo for employee management module',
    },
  ];

  return (
    <div className="w-full flex items-center justify-start my-7 mx-auto">
      <Highlight 
        toggle={true}
        badge="Demo"
        label="Kingso- ERP"
        description="Demo for employee management module"
        tags={}
      />
    </div>
  );
};

export default PinnedProjects;
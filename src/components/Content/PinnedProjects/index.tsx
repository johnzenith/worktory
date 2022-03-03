import React      from 'react';
import splitArray from '../../../helpers/splitArray';
import Highlight, {
  Props as HighlightProps
}  from '../../Highlight';

interface ProjectType extends HighlightProps {
  project?: boolean;
}

interface Props {}

const PinnedProjects: React.FC<Props> = () => {

  const splitProjectsInTwos: ProjectType[][] = React.useCallback(() => {
    const pinnedProjects: ProjectType[] = [
      {
        tags:        ['React', 'Firebase', 'Material UI'],
        badge:       'demo',
        label:       'Kingso- ERP',
        project:     true,
        description: 'Demo for an employee management module',
      },
      {
        tags:        ['React', 'Firebase', 'Material UI'],
        badge:       'Clone',
        label:       'Slack Clone',
        project:     true,
        description: 'app.slack.com clone',
      },
      {
        tags:        ['ReactNative'],
        badge:       'UI',
        label:       'Health App UI',
        project:     true,
        description: 'ReactNative health app UI',
      },
    ];
    
    return splitArray(pinnedProjects, 2);
  }, [])();

  console.log(splitProjectsInTwos);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-[20px] items-start justify-start mx-auto">
      {splitProjectsInTwos.map(projects => projects.map((project, index: number) => (
        <Highlight
          key={`highlight-${index}`}
          toggle={true}
          badge={project?.badge}
          label={project.label}
          description={project?.description}
          tags={project?.tags}
          className="h-full mb-[-10px]"
        />
      )))}
   </div>
  );
};

export default PinnedProjects;
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
        tags:        ['NextJS', 'Tailwind CSS'],
        badge:       'Code',
        label:       'Worktory',
        project:     true,
        description: 'A portfolio template library replicating the GitHub UI. Same is used to power this site.',
      },
      {
        tags:        ['React', 'Firebase', 'Material UI'],
        badge:       'Code',
        label:       'Kingso-ERP',
        project:     true,
        description: 'Demo for an employee management module',
      },
      {
        tags:        ['React', 'Firebase', 'Material UI'],
        badge:       'Code',
        label:       'Slack Clone',
        project:     true,
        description: 'app.slack.com clone',
      },
      {
        tags:        ['ReactNative', 'Expo'],
        badge:       'UI Build',
        label:       'Health App UI',
        project:     true,
        description: 'ReactNative health app UI',
      },
      {
        tags:        ['React', 'Material UI', 'Netlify'],
        badge:       'UI Build',
        label:       'Financial App UI',
        project:     true,
        description: 'A demo of a financial app UI on capital investment',
      },
      {
        tags:        ['JavaScript'],
        badge:       'Code',
        label:       'Check Digit JS',
        project:     true,
        description: 'A small library to quickly verify credit cards and serial numbers',
      },
      {
        tags:        ['Socket.IO', 'NodeJS', 'Heroku'],
        badge:       'Code',
        label:       'Socket.IO Chat App',
        project:     true,
        description: 'A simple chat app that demonstates how web socket works using Socket.IO',
      },
    ];
    
    return splitArray(pinnedProjects, 2);
  }, [])();

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
          className="h-full"
        />
      )))}
   </div>
  );
};

export default PinnedProjects;
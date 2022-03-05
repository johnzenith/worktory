import React      from 'react';
import splitArray from '../../../helpers/splitArray';
import Highlight, {
  Props as HighlightProps,
  ValidUrlType
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
        urls: [
          {
            url:   'https://res.cloudinary.com/worktory/video/upload/v1646502324/worktory_wxwpgk.mkv',
            type:  ValidUrlType.Video,
            label: 'Preview',
          },
          {
            url:   'https://worktory.vercel.app/',
            type:  ValidUrlType.Link,
            label: 'Open',
          },
          {
            url:   'https://github.com/johnzenith/worktory',
            type:  ValidUrlType.Link,
            label: 'View Code',
          },
        ]
      },
      {
        tags:        ['React', 'Firebase', 'Material UI'],
        badge:       'Code',
        label:       'Kingso-ERP',
        project:     true,
        description: 'Demo for an employee management module',
        urls: [
          {
            url:   'https://res.cloudinary.com/worktory/video/upload/v1646506191/kingso-erp_umxnfb.mkv',
            type:  ValidUrlType.Video,
            label: 'Preview',
          },
          {
            url:   'https://kingsooerp-development.web.app/',
            type:  ValidUrlType.Link,
            label: 'Open',
          },
          {
            url:   'https://github.com/johnzenith/kingsooerp-app',
            type:  ValidUrlType.Link,
            label: 'View Code',
          },
        ]
      },
      {
        tags:        ['React', 'Firebase', 'Material UI'],
        badge:       'Code',
        label:       'Slack Clone',
        project:     true,
        description: 'app.slack.com clone',
        urls: [
          {
            url:   'https://res.cloudinary.com/worktory/video/upload/v1646508793/slack-demo_qiqgl7.mkv',
            type:  ValidUrlType.Video,
            label: 'Preview',
          },
          {
            url:   'https://slack-clone-5b0e2.web.app/',
            type:  ValidUrlType.Link,
            label: 'Open',
          },
          {
            url:   'https://github.com/johnzenith/slack-clone',
            type:  ValidUrlType.Link,
            label: 'View Code',
          },
        ]
      },
      {
        tags:        ['ReactNative', 'Expo'],
        badge:       'UI Build',
        label:       'Health App UI',
        project:     true,
        description: 'ReactNative health app UI',
        urls: [
          {
            url:   '#',
            type:  ValidUrlType.Video,
            label: 'Preview',
          },
          {
            url:   'https://expo.io/@johnzenith/projects/health-app-ui',
            type:  ValidUrlType.Link,
            label: 'Open',
          },
          {
            url:   'https://github.com/johnzenith/health-app-ui',
            type:  ValidUrlType.Link,
            label: 'View Code',
          },
        ]
      },
      {
        tags:        ['React', 'Material UI', 'Netlify'],
        badge:       'UI Build',
        label:       'Financial App UI',
        project:     true,
        description: 'A demo of a financial app UI on capital investment',
        urls: [
          {
            url:   'https://res.cloudinary.com/worktory/video/upload/v1646507840/sfs-capital_velyj1.mkv',
            type:  ValidUrlType.Video,
            label: 'Preview',
          },
          {
            url:   'https://cranky-davinci-7bdd81.netlify.app/',
            type:  ValidUrlType.Link,
            label: 'Open',
          },
          {
            url:   'https://github.com/johnzenith/cloudfift-test',
            type:  ValidUrlType.Link,
            label: 'View Code',
          },
        ]
      },
      {
        tags:        ['JavaScript'],
        badge:       'Code',
        label:       'Check Digit JS',
        project:     true,
        description: 'A small library to quickly verify credit cards and serial numbers',
        urls: [
          {
            url:   '#',
            type:  ValidUrlType.Video,
            label: 'Preview',
          },
          {
            url:   '#',
            type:  ValidUrlType.Link,
            label: 'Open',
          },
          {
            url:   'https://github.com/johnzenith/check-digits-js',
            type:  ValidUrlType.Link,
            label: 'View Code',
          },
        ]
      },
      {
        tags:        ['Socket.IO', 'NodeJS', 'Heroku'],
        badge:       'Code',
        label:       'Socket.IO Chat App',
        project:     true,
        description: 'A simple chat app that demonstrates how web socket works using Socket.IO',
        urls: [
          {
            url:   'https://res.cloudinary.com/worktory/video/upload/v1646508172/web-socket_dyd33m.mkv',
            type:  ValidUrlType.Video,
            label: 'Preview',
          },
          {
            url:   'https://socket-io-chat-demo-app.herokuapp.com/',
            type:  ValidUrlType.Link,
            label: 'Open',
          },
          {
            url:   'https://github.com/johnzenith/socket-io-chat',
            type:  ValidUrlType.Link,
            label: 'View Code',
          },
        ]
      },
      {
        tags:        ['WordPress', 'WooCommerce', 'PHP', 'jQuery'],
        badge:       'Website',
        label:       'Bogat Watch Official Site',
        project:     true,
        description: 'A website for purchasing wrist watches with embedded cryptocurrency wallet',
        urls: [
          {
            url:   '#',
            type:  ValidUrlType.Image,
            label: 'Preview',
          },
          {
            url:   'https://bogatwatch.com/',
            type:  ValidUrlType.Link,
            label: 'Open',
          },
        ]
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
          urls={project?.urls}
          badge={project?.badge}
          label={project.label}
          description={project?.description}
          tags={project?.tags}
        />
      )))}
   </div>
  );
};

export default PinnedProjects;
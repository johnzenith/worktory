import React     from 'react';
import Highlight from '../../Highlight';
import {
  DiGo,
  DiNpm,
  DiAws,
  DiCode,
  DiSass,
  DiMysql,
  DiRedis,
  DiLinux,
  DiHtml5,
  DiHeroku,
  DiDocker,
  DiMongodb,
  DiCss3Full,
  DiFirebase,
  DiBootstrap,
  DiWordpress,
  DiJqueryLogo,
  DiPostgresql,
  DiGithubBadge,
  DiJavascript1,
  DiGoogleCloudPlatform,
} from 'react-icons/di';

import {
  FaPhp,
  FaReact,
  FaFigma,
  FaGitlab,
  FaNodeJs,
} from 'react-icons/fa';

interface Props {}

const ProfileOverview: React.FC<Props> = () => {

  const technologies = [
    {
      name:  'JavaScript',
      size:  17,
      icon:  DiJavascript1,
      color: '#f7df1e',
    },
    {
      name:  'TypeScript',
      size:  17,
      icon:  DiJavascript1,
    },
    {
      name: 'Node.JS',
      icon: FaNodeJs,
      color: '#44883e',
    },
    {
      name: 'PHP',
      icon: FaPhp,
      size: 18,
      color: '#4f5b93',
    },
    {
      name: 'Go',
      icon: DiGo,
      size: 18,
      color: '#29BEB0',
    },
    {
      name: 'GitHub',
      size: 18,
      icon: DiGithubBadge,
      color: '#4078c0',
    },
    {
      name: 'Gitlab',
      icon: FaGitlab,
      size: 13,
      color: '#fca326',
    },
    {
      name: 'Express.JS',
      icon: FaNodeJs,
      color: '#44883e',
    },
    {
      name: 'Koa.JS',
      icon: FaNodeJs,
      color: '#44883e',
    },
    {
      name: 'Fastify.JS',
      icon: FaNodeJs,
      color: '#44883e',
    },
    {
      name: 'Strapi.JS',
      icon: FaNodeJs,
      color: '#44883e',
    },
    {
      name: 'React.JS',
      icon: FaReact,
      color: '#00d8ff',
    },
    {
      name: 'ReactNative',
      icon: FaReact,
      color: '#00d8ff',
    },
    {
      name: 'Next.JS',
      icon: FaReact,
      color: '#00d8ff',
    },
    {
      name: 'NextAuth',
      icon: FaReact,
      color: '#00d8ff',
    },
    {
      name: 'RxJS',
      icon: FaReact,
      color: '#00d8ff',
    },
    {
      name: 'Redux',
      icon: FaReact,
      color: '#00d8ff',
    },
    {
      name: 'ReactQuery',
      icon: FaReact,
      color: '#00d8ff',
    },
    {
      name: 'Relay',
      icon: FaReact,
      color: '#00d8ff',
    },
    {
      name: 'Vercel',
      icon: FaReact,
      color: '#00d8ff',
    },
    {
      name: 'Firebase',
      icon: DiFirebase,
      size: 18,
      color: '#FFA611',
    },
    {
      name: 'AWS',
      icon: DiAws,
      size: 18,
      color: '#FF9900',
    },
    {
      name: 'Google Cloud Platform',
      icon: DiGoogleCloudPlatform,
      size: 18,
      color: '#4285F4',
    },
    {
      name: 'Heroku',
      icon: DiHeroku,
      color: '#6567a5',
    },
    {
      name: 'Docker',
      icon: DiDocker,
      color: '#0db7ed',
    },
    {
      name: 'MySQL',
      icon: DiMysql,
      color: '#00758f',
    },
    {
      name: 'PostgreSQL',
      icon: DiPostgresql,
      color: '#0db7ed',
    },
    {
      name: 'MongoDB',
      icon: DiMongodb,
      color: '#4DB33D',
    },
    {
      name: 'TypeORM',
      icon: DiCode,
      size: 18,
    },
    {
      name: 'Upstash',
      icon: DiCode,
      size: 18,
    },
    {
      name: 'GraphQL',
      icon: DiCode,
      size: 18,
      color: '#e535ab',
    },
    {
      name: 'Rest API',
      icon: DiCode,
      size: 18,
    },
    {
      name: 'RPC',
      icon: DiCode,
      size: 18,
    },
    {
      name: 'Redis',
      icon: DiRedis,
      size: 18,
      color: '#d82c20',
    },
    {
      name: 'NPM',
      icon: DiNpm,
      size: 18,
      color: '#cb3837',
    },
    {
      name: 'Composer',
      icon: DiCode,
      size: 18,
    },
    {
      name: 'Tailwind CSS',
      icon: DiCode,
      size: 18,
      color: '#38bdf8',
    },
    {
      name: 'Material UI',
      icon: DiCode,
      size: 18,
      color: '#007fff',
    },
    {
      name: 'CSS in JS',
      icon: DiCode,
      size: 18,
    },
    {
      name: 'Styled Components',
      icon: DiCode,
      size: 18,
    },
    {
      name: 'Laravel',
      icon: FaPhp,
      size: 18,
      color: '#4f5b93',
    },
    {
      name: 'WordPress',
      icon: DiWordpress,
      size: 18,
      color: '#21759b',
    },
    {
      name: 'HTML5',
      icon: DiHtml5,
      color: '#e34c26',
    },
    {
      name: 'jQuery',
      icon: DiJqueryLogo,
      color: '#0769ad',
    },
    {
      name: 'CSS3',
      icon: DiCss3Full,
      color: '#264de4',
    },
    {
      name: 'Sass',
      icon: DiSass,
      color: '#c69',
    },
    {
      name: 'Bootstrap',
      icon: DiBootstrap,
      color: '#563d7c',
    },
    {
      name: 'Figma',
      icon: FaFigma,
    },
    {
      name: 'Jest',
      icon: DiCode,
      size: 18,
    },
    {
      name: 'Linux',
      icon: DiLinux,
      size: 18,
    },
    {
      name: 'CI/CD',
      icon: DiCode,
      size: 18,
    },
    {
      name: 'Webpack',
      icon: DiCode,
      size: 18,
    },
    {
      name: 'Babel',
      icon: DiCode,
      size: 18,
    },
  ];

  const renderDescription = technologies.map(technology => {
    const size  = technology?.size || 15;
    const color = technology?.color ? { fill: technology.color } : {};

    return (
      <span key={technology.name} className="flex items-center mr-3">
        {<technology.icon size={size} {...color} />}
        <span className="ml-[2px]">
          {technology.name}
        </span>
      </span>
    );
  });

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
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
  const [shrink, setShrink] = React.useState(false);

  const technologies = [
    {
      name:  'JavaScript',
      size:  17,
      icon:  DiJavascript1,
      color: '#f7df1e',
      section: 'javascript',
    },
    {
      name:  'TypeScript',
      size:  17,
      icon: DiJavascript1,
      section: 'javascript',
    },
    {
      name: 'Node.JS',
      icon: FaNodeJs,
      color: '#44883e',
      section: 'nodejs',
    },
    {
      name: 'PHP',
      icon: FaPhp,
      size: 18,
      color: '#4f5b93',
      section: 'php',
    },
    {
      name: 'Go',
      icon: DiGo,
      size: 18,
      color: '#29BEB0',
      section: 'go',
    },
    {
      name: 'GitHub',
      size: 18,
      icon: DiGithubBadge,
      color: '#4078c0',
      section: 'source-control',
    },
    {
      name: 'Gitlab',
      icon: FaGitlab,
      size: 13,
      color: '#fca326',
      section: 'source-control',
    },
    {
      name: 'Express.JS',
      icon: FaNodeJs,
      color: '#44883e',
      section: 'nodejs',
    },
    {
      name: 'Koa.JS',
      icon: FaNodeJs,
      color: '#44883e',
      section: 'nodejs',
    },
    {
      name: 'Fastify.JS',
      icon: FaNodeJs,
      color: '#44883e',
      section: 'nodejs',
    },
    {
      name: 'Strapi.JS',
      icon: FaNodeJs,
      color: '#44883e',
      section: 'nodejs',
    },
    {
      name: 'Socket.IO',
      icon: FaNodeJs,
      color: '#000',
      section: 'web-socket',
    },
    {
      name: 'React.JS',
      icon: FaReact,
      color: '#00d8ff',
      section: 'reactjs',
    },
    {
      name: 'ReactNative',
      icon: FaReact,
      color: '#00d8ff',
      section: 'reactjs',
    },
    {
      name: 'Expo',
      icon: FaReact,
      color: '#000',
      section: 'reactjs',
    },
    {
      name: 'Next.JS',
      icon: FaReact,
      color: '#00d8ff',
      section: 'reactjs',
    },
    {
      name: 'NextAuth',
      icon: FaReact,
      color: '#00d8ff',
      section: 'reactjs',
    },
    {
      name: 'RxJS',
      icon: FaReact,
      color: '#00d8ff',
      section: 'reactjs',
    },
    {
      name: 'Redux',
      icon: FaReact,
      color: '#00d8ff',
      section: 'reactjs',
    },
    {
      name: 'ReactQuery',
      icon: FaReact,
      color: '#00d8ff',
      section: 'reactjs',
    },
    {
      name: 'Relay',
      icon: FaReact,
      color: '#00d8ff',
      section: 'reactjs',
    },
    {
      name: 'Vercel',
      icon: FaReact,
      color: '#00d8ff',
      section: 'deployment-service',
    },
    {
      name: 'Netlify',
      icon: FaReact,
      color: '#00AD9F',
      section: 'deployment-service',
    },
    {
      name: 'Firebase',
      icon: DiFirebase,
      size: 18,
      color: '#FFA611',
      section: 'deployment-service',
    },
    {
      name: 'AWS',
      icon: DiAws,
      size: 18,
      color: '#FF9900',
      section: 'deployment-service',
    },
    {
      name: 'Google Cloud Platform',
      icon: DiGoogleCloudPlatform,
      size: 18,
      color: '#4285F4',
      section: 'deployment-service',
    },
    {
      name: 'Heroku',
      icon: DiHeroku,
      color: '#6567a5',
      section: 'deployment-service',
    },
    {
      name: 'Docker',
      icon: DiDocker,
      color: '#0db7ed',
      section: 'deployment-service',
    },
    {
      name: 'MySQL',
      size: 18,
      icon: DiMysql,
      color: '#00758f',
      section: 'db',
    },
    {
      name: 'PostgreSQL',
      size: 18,
      icon: DiPostgresql,
      color: '#0db7ed',
      section: 'db',
    },
    {
      name: 'MongoDB',
      icon: DiMongodb,
      size: 18,
      color: '#4DB33D',
      section: 'db',
    },
    {
      name: 'FireStore',
      icon: DiFirebase,
      size: 18,
      color: '#FFA611',
      section: 'db',
    },
    {
      name: 'TypeORM',
      icon: DiCode,
      size: 18,
      section: 'nodejs',
    },
    {
      name: 'Apollo',
      icon: DiCode,
      size: 18,
      color: '#3f20ba',
      section: 'reactjs',
    },
    {
      name: 'Prisma',
      icon: DiCode,
      size: 18,
      color: '#1a202c',
      section: 'nodejs',
    },
    {
      name: 'Upstash',
      icon: DiCode,
      size: 18,
      section: 'cache',
    },
    {
      name: 'GraphQL',
      icon: DiCode,
      size: 18,
      color: '#e535ab',
      section: 'api',
    },
    {
      name: 'Rest API',
      icon: DiCode,
      size: 18,
      section: 'api',
    },
    {
      name: 'RPC',
      icon: DiCode,
      size: 18,
      section: 'api',
    },
    {
      name: 'Redis',
      icon: DiRedis,
      size: 18,
      color: '#d82c20',
      section: 'cache',
    },
    {
      name: 'NPM',
      icon: DiNpm,
      size: 18,
      color: '#cb3837',
      section: 'nodejs',
    },
    {
      name: 'Composer',
      icon: DiCode,
      size: 18,
      section: 'php',
    },
    {
      name: 'Tailwind CSS',
      icon: DiCode,
      size: 18,
      color: '#38bdf8',
      section: 'design-framework',
    },
    {
      name: 'Material UI',
      icon: DiCode,
      size: 18,
      color: '#007fff',
      section: 'design-framework',
    },
    {
      name: 'CSS in JS',
      icon: DiCode,
      size: 18,
      section: 'design-framework',
    },
    {
      name: 'Styled Components',
      icon: DiCode,
      size: 18,
      section: 'design-framework',
    },
    {
      name: 'Semantic UI',
      icon: DiCode,
      size: 18,
      section: 'design-framework',
    },
    {
      name: 'Laravel',
      icon: FaPhp,
      size: 18,
      color: '#4f5b93',
      section: 'php',
    },
    {
      name: 'WordPress',
      icon: DiWordpress,
      size: 18,
      color: '#21759b',
      section: 'wordpress'
    },
    {
      name: 'WooCommerce',
      icon: DiCode,
      size: 18,
      color: '#21759b',
      section: 'wordpress'
    },
    {
      name: 'HTML5',
      icon: DiHtml5,
      color: '#e34c26',
      section: 'markup-language'
    },
    {
      name: 'jQuery',
      icon: DiJqueryLogo,
      color: '#0769ad',
      section: 'javascript',
    },
    {
      name: 'CSS3',
      icon: DiCss3Full,
      color: '#264de4',
      section: 'markup-language'
    },
    {
      name: 'Sass',
      icon: DiSass,
      color: '#c69',
      section: 'markup-language'
    },
    {
      name: 'Bootstrap',
      icon: DiBootstrap,
      color: '#563d7c',
      section: 'design-framework',
    },
    {
      name: 'Figma',
      icon: FaFigma,
      section: 'design-framework',
    },
    {
      name: 'Jest',
      icon: DiCode,
      size: 18,
      section: 'reactjs',
    },
    {
      name: 'Linux',
      icon: DiLinux,
      size: 18,
      section: 'linux',
    },
    {
      name: 'CI/CD',
      icon: DiCode,
      size: 18,
      section: 'deployment-service',
    },
    {
      name: 'Webpack',
      icon: DiCode,
      size: 18,
      section: 'package-bundler',
    },
    {
      name: 'Babel',
      icon: DiCode,
      size: 18,
      section: 'package-bundler',
    },
  ];


  const renderDescription = (skills: typeof technologies) => skills.map(technology => {
    const size  = technology?.size || 15;
    const color = technology?.color ? { fill: technology.color } : {}

    return (
      <span key={technology.name} className="flex items-center mr-3">
        {<technology.icon size={size} {...color} />}
        <span className="ml-[2px]">
          {technology.name}
        </span>
      </span>
    );
  });

  const renderSkills = React.useCallback(() => {
    const skills = [
      {
        label:   'JavaScript',
        section: 'javascript',
      },
      {
        label:   'NodeJS',
        section: 'nodejs',
      },
      {
        label:   'ReactJS',
        section: 'reactjs',
      },
      {
        label:   'Design Framework',
        section: 'design-framework',
      },
      {
        label:   'PHP',
        section: 'php',
      },
      {
        label:   'Markup & Stylesheet',
        section: 'markup-language',
      },
      {
        label:   'Source Control',
        section: 'source-control',
      },
      {
        label:   'Database',
        section: 'db',
      },
      {
        label:   'API',
        section: 'api',
      },
      {
        label:   'Caching',
        section: 'cache',
      },
      {
        label:   'Deployment Service',
        section: 'deployment-service',
      },
      {
        label:   'Linux',
        section: 'linux',
      },
      {
        label:   'Package Bundler & Compiler',
        section: 'package-bundler',
      },
    ];

    const renderSkillSection = (label: string, section: string) => {
      const techs = technologies.filter((tech, index: number) => tech?.section === section);
      
      return (
        <React.Fragment key={section}>
          <div className="flex w-full mt-[10px] border-b border-borderLineDark">
            <span className="w-fit flex items-center font-sans font-medium h-[30px] px-[10px] border border-borderLineDark border-b-0 rounded-t-[4px]">
              {label}
            </span>
          </div>
          {renderDescription(techs)}
          <div className="w-full mb-[15px]"></div>
        </React.Fragment>
      );
    };
    
    return skills.map(skill => (
      renderSkillSection(skill.label, skill.section)
    ));
  }, [])();

  const renderAllSkills = React.useCallback(() => {
    return renderDescription(technologies);
  }, [])();

  const renderShrinkContent = !shrink ?
    renderSkills : renderAllSkills;

  const handleShrink = (shrink: boolean) => {
    setShrink(shrink);
  };

  return (
    <div className="profile-overview w-full flex items-center justify-start my-7 mx-auto">
      <Highlight 
        toggle={true}
        shrink={handleShrink}
        badge="Active"
        label="Technologies"
        description={renderShrinkContent}
      />
    </div>
  );
};

export default React.memo(ProfileOverview);
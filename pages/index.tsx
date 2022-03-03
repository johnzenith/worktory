import type { NextPage } from 'next';
import Head              from 'next/head';
import Container         from '../src/components/Container';

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>John Zenith</title>
        <meta name="description" content="John Zenith - JavaScript Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Container />
    </div>
  )
}

export default Home

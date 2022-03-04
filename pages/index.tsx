import type { NextPage } from 'next';
import Head              from 'next/head';
import Container         from '../src/components/Container';

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>John Musa</title>
        <meta name="description" content="John Musa - JavaScript Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Container />
    </div>
  )
}

export default Home;

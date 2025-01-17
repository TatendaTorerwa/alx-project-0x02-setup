import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Project 2</title>
      </Head>
      <Header />
      <main>
        <h2>Welcome to ALX Project 2 using Next.js, TypeScript, and Tailwind CSS</h2>
      </main>
    </div>
  );
}

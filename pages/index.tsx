import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';


const Home: NextPage = () => (
  <>
    <Head>
      <title>&#127869; Stores d&apos;Oeuvres</title>
    </Head>
    <main>
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold text-center">
          Stores d&apos;Oeuvres
        </h1>
        <Link href="/stores">
          <a className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md">
            Fire up the grill
          </a>
        </Link>
      </div>
    </main>
  </>
);

export default Home

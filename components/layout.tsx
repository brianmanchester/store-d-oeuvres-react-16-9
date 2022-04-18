import Head from "next/head";
import { ReactNode, useEffect, useRef, useState } from "react";
import StoresProvider from '../app-stores/stores-provider';

const Layout = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  const [{ shrimpStartCount, slidersStartCount }, setStartCounts] = useState({
    shrimpStartCount: [3],
    slidersStartCount: [4]
  });

  const spanRef = useRef<HTMLSpanElement>(null!);
  const timerRef = useRef<NodeJS.Timeout>();

  const update = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    console.log('%cContainer rendered', 'color:red');
    spanRef.current?.classList.add('animate-ping');

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      spanRef.current?.classList.remove('animate-ping');
    }, 4000);
  }, [count, shrimpStartCount, slidersStartCount]);

  return (
    <>
      <Head>
        <title>&#127869; Stores d&apos;Oeuvres</title>
      </Head>
      <main className="relative">
        <StoresProvider shrimpStartCount={shrimpStartCount} slidersStartCount={slidersStartCount}>
          {children}
        </StoresProvider>
        <div className="absolute bottom-0 right-24">
          <div className="flex flex-col justify-center items-start gap-4">
            <button
              className="bg-cyan-500 hover:bg-cyan-700 text-white font-semibold py-3 w-60 rounded-md shadow-md"
              onClick={() => setStartCounts(prevState => ({ ...prevState, shrimpStartCount: [0] }))}
            >
              Eat all the shrimp
            </button>
            <button
              className="bg-cyan-500 hover:bg-cyan-700 text-white font-semibold py-3 w-60 rounded-md shadow-md"
              onClick={() => setStartCounts(prevState => ({ ...prevState, slidersStartCount: [0] }))}
            >
              Eat all the sliders
            </button>
            <button
              className="bg-cyan-500 hover:bg-cyan-700 text-white font-semibold py-3 w-60 rounded-md shadow-md"
              onClick={() => setStartCounts({ shrimpStartCount: [0], slidersStartCount: [0] })}
            >
              Eat all the Stores d&apos;Oeuvres
            </button>
            <button
              className="bg-cyan-500 hover:bg-cyan-700 text-white font-semibold py-3 w-60 rounded-md shadow-md"
              onClick={update}
            >
              Update container
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 right-5">
          <span className="flex h-12 w-12">
            <span className="absolute inline-flex h-full w-full rounded-full bg-blueGray-400 opacity-75" ref={spanRef} />
            <span className="relative inline-flex rounded-full h-12 w-12 bg-blueGray-500">
              <span className="absolute top-2 right-3 text-2xl">&#128230;</span>
            </span>
          </span>
        </div>
      </main>
    </>
  );
};

export default Layout;
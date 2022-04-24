import { ReactNode, useEffect, memo, useRef } from "react";
import ShrimpProvider from "./shrimp";
import SlidersProvider from "./sliders";
// import Memoize from '../components/memoize';

export type StartCounts = {
  shrimpStartCount?: number[];
  slidersStartCount?: number[];
}

const StoreProviders = ({
  children,
  shrimpStartCount,
  slidersStartCount
}: StartCounts & { children: ReactNode }) => {
  const spanRef = useRef<HTMLSpanElement>(null!);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    console.log('%cStoreProviders rendered', 'color:tomato');
    spanRef.current?.classList.add('animate-ping');

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      spanRef.current?.classList.remove('animate-ping');
    }, 4000);
  });

  return (
    <>
      <div className="absolute top-4 left-4">
        <span className="flex h-12 w-12">
          <span className="absolute inline-flex h-full w-full rounded-full bg-blueGray-400 opacity-75" ref={spanRef} />
          <span className="relative inline-flex rounded-full h-12 w-12 bg-blueGray-500">
            <span className="absolute top-2 left-3 text-2xl">&#127869;</span>
          </span>
        </span>
      </div>
      <ShrimpProvider startCount={shrimpStartCount}>
        <SlidersProvider startCount={slidersStartCount}>
          {children}
        </SlidersProvider>
      </ShrimpProvider>
    </>
  );
}

export default memo(StoreProviders);
// export default StoreProviders;
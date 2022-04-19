import { ReactNode, useState, useEffect, useCallback, useRef, memo } from 'react';
// import Memoize from '../components/memoize';
import { createStore } from '../stores';
import { Params, StoreState } from './types';

const useShrimp = (params?: Params) => {
  const [shrimpStore, setShrimpStore] = useState<StoreState>({
    consumers: [],
    items: params?.startCount?.[0] || 0,
  });

  // Memoized
  const addShrimp = useCallback(() => {
    setShrimpStore(prevState => ({ ...prevState, items: prevState.items + 1 }));
  }, []);

  // Non-memoized
  // const addShrimp = () => {
  //   setShrimpStore(prevState => ({ ...prevState, shrimp: prevState.shrimp + 1 }));
  // };

  // Memoized
  const registerConsumer = useCallback((name: string) => {
    setShrimpStore(prevState => ({
      ...prevState,
      consumers: prevState.consumers.includes(name)
        ? [...prevState.consumers]
        : [...prevState.consumers, name]
    }));
  }, []);

  // Non-memoized
  // const registerConsumer = (name: string) => {
  //   setShrimpStore(prevState => ({
  //     ...prevState,
  //     consumers: prevState.consumers.includes(name)
  //       ? [...prevState.consumers]
  //       : [...prevState.consumers, name]
  //   }));
  // };

  useEffect(() => {
    setShrimpStore(prevState => ({ ...prevState, items: params?.startCount?.[0] || 0 }));
  }, [params?.startCount]);

  return {
    addShrimp,
    consumers: shrimpStore.consumers.length,
    registerConsumer,
    shrimp: shrimpStore.items,
  };
}

const Shrimp = createStore(useShrimp, 'Shrimp');

export const useShrimpStore = () => Shrimp.useStore();

const ShrimpProvider = ({
  children,
  startCount
}: Params & { children: ReactNode }) => {
  const spanRef = useRef<HTMLSpanElement>(null!);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    console.log('%cShrimpProvider rendered', 'color:papayawhip');
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
      <div style={{ position: 'fixed', top: 16, left: '50%', marginLeft: '-24px' }}>
        <div className="absolute">
          <span className="flex h-12 w-12">
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-blueGray-400 opacity-75"
              ref={spanRef}
            />
            <span
              className="relative inline-flex rounded-full h-12 w-12 bg-blueGray-500"
            >
              <span className="absolute top-2 left-3 text-2xl">&#127844;</span>
            </span>
          </span>
        </div>
      </div>
      <Shrimp.Provider params={{ startCount }}>{children}</Shrimp.Provider>
    </>
  );
};

export default memo(ShrimpProvider);
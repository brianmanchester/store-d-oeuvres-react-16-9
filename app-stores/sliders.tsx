import { ReactNode, useState, useEffect, useCallback, useRef } from 'react';
import { createStore } from '../stores';
import { Params, StoreState } from './types';

const useSliders = (params?: Params) => {
  const [slidersStore, setSlidersStore] = useState<StoreState>({
    consumers: [],
    items: params?.startCount || 0
  });
  
  // Memoized
  const addSlider = useCallback(() => {
    setSlidersStore(prevState => ({ ...prevState, items: prevState.items + 1 }));
  }, []);

  // Non-memoized
  // const addSlider = () => {
  //   setSlidersStore(prevState => ({ ...prevState, items: prevState.items + 1 }));
  // };

  // Memoized
  const registerConsumer = useCallback((name: string) => {
    setSlidersStore(prevState => ({
      ...prevState,
      consumers: prevState.consumers.includes(name)
        ? [...prevState.consumers]
        : [...prevState.consumers, name]
    }));
  }, []);

  // Non-memoized
  // const registerConsumer = (name: string) => {
  //   setSlidersStore(prevState => ({
  //     ...prevState,
  //     consumers: prevState.consumers.includes(name)
  //       ? [...prevState.consumers]
  //       : [...prevState.consumers, name]
  //   }));
  // };

  useEffect(() => {
    setSlidersStore(prevState => ({ ...prevState, items: params?.startCount || 0 }));
  }, [params?.startCount]);

  return {
    addSlider,
    consumers: slidersStore.consumers.length,
    registerConsumer,
    sliders: slidersStore.items,
  };
}

const Sliders = createStore(useSliders, 'Sliders');

export const useSlidersStore = () => Sliders.useStore();

const SlidersProvider = ({
  children,
  startCount
}: Params & { children: ReactNode }) => {
  const spanRef = useRef<HTMLSpanElement>(null!);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    console.log('%cSlidersProvider rendered', 'color:papayawhip');
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
      <div className="absolute top-4 right-4">
        <span className="flex h-12 w-12">
          <span className="absolute inline-flex h-full w-full rounded-full bg-blueGray-400 opacity-75" ref={spanRef} />
          <span className="relative inline-flex rounded-full h-12 w-12 bg-blueGray-500">
          <span className="absolute top-2 left-3 text-2xl">&#127828;</span>
          </span>
        </span>
      </div>
      <Sliders.Provider params={{ startCount }}>{children}</Sliders.Provider>
    </>
  );
};

export default SlidersProvider;
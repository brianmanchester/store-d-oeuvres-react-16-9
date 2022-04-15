import { useEffect, useRef } from 'react';
import { useShrimpStore } from '../../app-stores/shrimp';
import Rendered from '../rendered';

const Shrimp = () => {
  const renderedRef = useRef<HTMLDivElement>(null!);
  const { addShrimp } = useShrimpStore();
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    console.log('%cShrimpIncrementor rendered', 'color:teal');
    renderedRef.current?.classList.remove('hidden');

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      renderedRef.current?.classList.add('hidden');
    }, 4000);
  });

  return (
    <div className="relative">
      <div className="absolute top-4 left-2" ref={renderedRef}>
        <Rendered />
      </div>
      <button
        className="bg-cyan-500 hover:bg-cyan-700 text-white font-semibold py-3 rounded-md w-40 shadow-md"
        onClick={addShrimp}
      >
        Add a shrimp
      </button>
    </div>
  );
};

export default Shrimp;
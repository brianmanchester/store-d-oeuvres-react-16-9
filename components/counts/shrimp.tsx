import { useEffect, useRef } from 'react';
import { useShrimpStore } from '../../app-stores/shrimp';
import Rendered from '../rendered';

const Shrimp = () => {
  const renderedRef = useRef<HTMLDivElement>(null!);
  const { shrimp } = useShrimpStore();
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    console.log('%cShrimpCount rendered', 'color:magenta');
    renderedRef.current?.classList.remove('hidden');

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      renderedRef.current?.classList.add('hidden');
    }, 4000);
  });
  
  return (
    <div className="bg-pink-500 py-1 rounded-3xl w-64 relative">
      <div className="absolute top-2.5 left-1" ref={renderedRef}>
        <Rendered />
      </div>
      <h2
        className="text-white text-lg text-center"
      >
        Shrimps on the barbie: {shrimp}
      </h2>
    </div>
  );
}

export default Shrimp;
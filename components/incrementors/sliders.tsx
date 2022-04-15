import { useEffect, useRef } from 'react';
import { useSlidersStore } from '../../app-stores/sliders';
import Rendered from '../rendered';

const Sliders = () => {
  const renderedRef = useRef<HTMLDivElement>(null!);
  const { addSlider } = useSlidersStore();
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    console.log('%cSlidersIncrementor rendered', 'color:teal');
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
        onClick={addSlider}
      >
        Add a slider
      </button>
    </div>
  );
};

export default Sliders;
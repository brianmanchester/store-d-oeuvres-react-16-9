import { ReactNode, useEffect, useRef } from 'react';
import Rendered from './rendered';

const RenderedStatus = ({
  children,
  color,
  name
}: { children?: ReactNode; color: string; name: string; }) => {
  const renderedRef = useRef<HTMLDivElement>(null!);
  const renderCountRef = useRef<HTMLSpanElement>(null!);
  const renderCount = useRef(0);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    console.log(`%c${name} rendered`, `color:${color}`);
    renderCount.current += 1;
    
    if (renderCountRef.current?.innerText) {
      renderCountRef.current.innerText = `Render count: ${renderCount.current}`;
    }

    renderedRef.current?.classList.remove('hidden');

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      renderedRef.current?.classList.add('hidden');
    }, 4000);
  });

  return (
    <>
      <div ref={renderedRef} className="absolute top-2 left-2">
        <Rendered />
      </div>
      <div className="absolute top-1 right-3">
        <span className="text-base font-medium" ref={renderCountRef}>Rendered count: 0</span>
      </div>
      {children}
    </>
  );
};

export default RenderedStatus;
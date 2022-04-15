import { Props } from '../types';
import RenderedStatus from '../rendered-status';
import { useSlidersStore } from '../../app-stores/sliders';
import { useEffect } from 'react';
import Consuming from '../consuming';

const Parent = ({ children, names: { p } }: Props) => {
  const { consumers, registerConsumer, sliders } = useSlidersStore();

  useEffect(() => {
    console.log(`%c${p} registering consumer`, 'color:yellow');
    registerConsumer(p);
  }, [p, registerConsumer]);

  return (
    <div className="rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-64 h-64 shadow-md flex justify-center items-center relative">
      <RenderedStatus color='turquoise' name={p}>{children}</RenderedStatus>
      <Consuming consumers={consumers} items={sliders} name="sliders" />
    </div>
  );
};

export default Parent;
import { Props } from '../types';
import RenderedStatus from '../rendered-status';
import { useSlidersStore } from '../../app-stores/sliders';
import { useEffect } from 'react';
import Consuming from '../consuming';

const GrandParent = ({ children, names: { gp } }: Props) => {
  const { consumers, registerConsumer, sliders } = useSlidersStore();

  useEffect(() => {
    console.log(`%c${gp} registering consumer`, 'color:yellow');
    registerConsumer(gp);
  }, [gp, registerConsumer]);

  return (
    <div className="rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 w-80 h-80 shadow-md flex justify-center items-center relative">
      <RenderedStatus color="deepskyblue" name={gp}>
        {children}
      </RenderedStatus>
      <Consuming consumers={consumers} items={sliders} name="sliders" />
    </div>
  );
};

export default GrandParent;
import { Props } from '../types';
import RenderedStatus from '../rendered-status';
import { useShrimpStore } from '../../app-stores/shrimp'
import { useEffect } from 'react';
import Consuming from '../consuming';

const GreatGrandParent = ({ children, names: { ggp } }: Props) => {
  const { consumers, registerConsumer, shrimp } = useShrimpStore();

  useEffect(() => {
    console.log(`%c${ggp} registering consumer`, 'color:yellow');
    registerConsumer(ggp);
  }, [ggp, registerConsumer]);

  return (
    <div className="rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 w-96 h-96 shadow-md flex justify-center items-center relative">
      <RenderedStatus color='turquoise' name={ggp}>{children}</RenderedStatus>
      <Consuming consumers={consumers} items={shrimp} name="shrimp" />
    </div>
  );
};

export default GreatGrandParent;
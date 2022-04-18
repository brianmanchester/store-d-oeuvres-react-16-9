import GrandParent from "./grand-parent";
import RenderedStatus from '../rendered-status';
import { useShrimpStore } from '../../app-stores/shrimp'
import { useEffect } from 'react';
import Consuming from '../consuming';

const GreatGrandParent = () => {
  const { consumers, registerConsumer, shrimp } = useShrimpStore();
  const name = "GGP-BR";

  useEffect(() => {
    console.log(`%c${name} registering consumer`, 'color:yellow')
    registerConsumer(name);
  }, [name, registerConsumer]);

  return (
    <div className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 w-96 h-96 shadow-md flex justify-center items-center relative">
      <RenderedStatus color="darkorchid" name={name}>
        <GrandParent />
      </RenderedStatus>
      <Consuming consumers={consumers} items={shrimp} name="shrimp" />
    </div>
  );
};

export default GreatGrandParent;
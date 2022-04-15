import Parent from "./parent";
import RenderedStatus from '../rendered-status';
import { Props } from '../types';
import { useSlidersStore } from '../../app-stores/sliders'
import { useEffect } from 'react';
import Consuming from '../consuming';

const GrandParent = ({ names }: Pick<Props, 'names'>) => {
  const { consumers, registerConsumer, sliders } = useSlidersStore();
  const { gp } = names;

  useEffect(() => {
    console.log(`%c${gp} registering consumer`, 'color:yellow');
    registerConsumer(gp);
  }, [gp, registerConsumer]);

  return (
    <div className="rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-80 h-80 shadow-md flex justify-center items-center relative">
      <RenderedStatus color="palevioletred" name={gp}>
        <Parent names={names} />
      </RenderedStatus>
      <Consuming consumers={consumers} items={sliders} name="sliders" />
    </div>
  );
};

export default GrandParent;
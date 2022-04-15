import Child from './child';
import RenderedStatus from '../rendered-status';
import { Props } from '../types';
import { useShrimpStore } from '../../app-stores/shrimp'
import { useEffect } from 'react';
import Consuming from '../consuming';

const Parent = ({ names }: Pick<Props, 'names'>) => {
  const { consumers, registerConsumer, shrimp } = useShrimpStore();
  const { p } = names;

  useEffect(() => {
    console.log(`%c${p} registering consumer`, 'color:yellow')
    registerConsumer(p);
  }, [p, registerConsumer]);

  return (
    <div className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 w-64 h-64 shadow-md flex justify-center items-center relative">
      <RenderedStatus color="palevioletred" name={p}>
        <Child names={names} />
      </RenderedStatus>
      <Consuming consumers={consumers} items={shrimp} name="shrimp" />
    </div>
  );
};

export default Parent;
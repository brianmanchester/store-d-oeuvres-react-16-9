import RenderedStatus from '../rendered-status';
import { Props } from '../types';

const Child = ({ names }: Pick<Props, 'names'>) => (
  <div className="rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 w-48 h-48 shadow-md flex justify-center items-cente relative">
    <RenderedStatus color="palevioletred" name={names.c} />
  </div>
);

export default Child;
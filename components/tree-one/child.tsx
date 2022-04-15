import RenderedStatus from '../rendered-status';
import { Props } from '../types';

const Child = ({ names }: Pick<Props, 'names'>) => (
  <div className="rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 w-48 h-48 shadow-md flex justify-center items-center relative">
    <RenderedStatus color='turquoise' name={names.c} />
  </div>
);

export default Child;
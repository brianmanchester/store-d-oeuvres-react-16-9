import { Props } from '../types';
import RenderedStatus from '../rendered-status';

const GreatGrandParent = ({ children, names }: Props) => (
  <div className="rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-96 h-96 shadow-md flex justify-center items-center relative">
    <RenderedStatus color="deepskyblue" name={names.ggp}>
      {children}
    </RenderedStatus>
  </div>
);

export default GreatGrandParent;
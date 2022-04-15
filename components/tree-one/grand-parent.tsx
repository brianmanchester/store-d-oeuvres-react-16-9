import { Props } from '../types';
import RenderedStatus from '../rendered-status';

const GrandParent = ({ children, names }: Props) => (
  <div className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 w-80 h-80 shadow-md flex justify-center items-center relative">
    <RenderedStatus color='turquoise' name={names.gp}>{children}</RenderedStatus>
  </div>
);

export default GrandParent;
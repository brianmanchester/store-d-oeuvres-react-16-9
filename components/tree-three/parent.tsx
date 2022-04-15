import { Props } from '../types';
import RenderedStatus from '../rendered-status';

const Parent = ({ children, names }: Props) => (
  <div className="rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 w-64 h-64 shadow-md flex justify-center items-center relative">
    <RenderedStatus color="deepskyblue" name={names.p}>
      {children}
    </RenderedStatus>
  </div>
);

export default Parent;
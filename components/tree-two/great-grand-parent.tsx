import GrandParent from "./grand-parent";
import RenderedStatus from '../rendered-status';
import { Props } from '../types';

const GreatGrandParent = ({ names }: Pick<Props, 'names'>) => {
  return (
    <div className="rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 w-96 h-96 shadow-md flex justify-center items-center relative">
      <RenderedStatus color="palevioletred" name={names.ggp}>
        <GrandParent names={names} />
      </RenderedStatus>
    </div>
  );
}

export default GreatGrandParent;
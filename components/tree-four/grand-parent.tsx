import Parent from "./parent";
import RenderedStatus from '../rendered-status';

const GrandParent = () => (
  <div className="rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 w-80 h-80 shadow-md flex justify-center items-center relative">
    <RenderedStatus color="darkorchid" name="GP-BR">
      <Parent />
    </RenderedStatus>
  </div>
);

export default GrandParent;
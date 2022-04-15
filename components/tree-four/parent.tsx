import Child from './child';
import RenderedStatus from '../rendered-status';

const Parent = () => (
  <div className="rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 w-64 h-64 shadow-md flex justify-center items-center relative">
    <RenderedStatus color="darkorchid" name="P-BR">
      <Child />
    </RenderedStatus>
  </div>
);

export default Parent;
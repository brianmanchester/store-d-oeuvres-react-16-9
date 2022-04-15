import RenderedStatus from '../rendered-status';

const Child = () => (
  <div className="rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-48 h-48 shadow-md flex justify-center items-center relative">
    <RenderedStatus color="darkorchid" name="C-BR" />
  </div>
);

export default Child;
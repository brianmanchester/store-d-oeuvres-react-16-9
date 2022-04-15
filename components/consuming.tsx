const Consuming = ({
  consumers,
  items,
  name
}: { consumers: number; items: number; name: 'shrimp' | 'sliders' }) => (
  <div className="absolute bottom-1 left-3">
    <span className="text-base font-medium">
      Eating {(items / consumers).toFixed(2)} {name}
    </span>
  </div>
);

export default Consuming;
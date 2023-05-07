const Shimmer = () => {
  return (
    <div className="grid grid-flow-col justify-center m-8 p-2">
      <div className="grid grid-cols-4">
        {[...Array(15)].map((x, i) => (
          <div key={i}>
            <div className="shadow-sm bg-zinc-50 border border-1 m-2 p-4 w-44 h-36"></div>
            <div className="shadow-sm bg-zinc-50 border border-1 m-2 p-1 w-36 h-4"></div>
            <div className="shadow-sm bg-zinc-50 border border-1 m-2 p-1 w-28 h-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;

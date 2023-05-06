const Shimmer = () => {
  return (
    <div className="flex flex-wrap m-8 p-2">
      {[...Array(10)].map((x, i) => (
        <div key={i}>
          <div className="shadow-md bg-slate-50 border border-1 m-2 p-4 w-44 h-36"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

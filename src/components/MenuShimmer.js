const MenuShimmer = () => {
  return (
    <div>
      {[...Array(15)].map((x, i) => (
        <div className="flex justify-center" key={i}>
          <div className="m-2 p-2 w-3/5 shadow-sm flex justify-between bg-slate-50 h-20">
            <div>
              <div className="w-52 h-4 m-2 bg-slate-200"></div>
              <div className="w-36 h-3 m-2 bg-slate-200"></div>
            </div>
            <div className="w-24 h-16 bg-slate-200"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuShimmer;

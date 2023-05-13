import { useEffect, useState } from "react";
import { SUPPORT_CDN_LINK } from "../constants";
import HelpDetails from "./HelpDetails";
import { Link } from "react-router-dom";

const Help = () => {
  const [supportTypes, setSupportTypes] = useState([]);

  useEffect(() => {
    fetchSupportData();
  }, []);

  const fetchSupportData = async () => {
    const data = await fetch(SUPPORT_CDN_LINK);
    const json = await data.json();
    setSupportTypes(json?.data?.issueTypes?.data);
    console.log(supportTypes);
  };

  return supportTypes.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="bg-cyan-700">
      <div className="p-5 pt-8 mx-40">
        <div className="mb-9 mt-9">
          <h1 className="text-white font-bold">Help & Support</h1>
          <h1 className="text-white text-[10px] font-light">
            Let's take a step ahead and help you better.
          </h1>
        </div>
        <div className="flex bg-white p-5 pt-8">
          <div className="shadow-sm bg-slate-200 w-44 mx-7">
            <div className="p-2">
              {supportTypes.map((supprtType, index) => (
                <div key={index} className="list-none text-left">
                  <li className="py-2 hover:bg-white font-semibold text-xs p-2 rounded-md cursor-pointer">
                    <Link to={"/support/issues/" + supprtType.type}>
                      {supprtType.title}
                    </Link>
                  </li>
                </div>
              ))}
            </div>
          </div>
          <div className="w-5/6">
            <HelpDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;

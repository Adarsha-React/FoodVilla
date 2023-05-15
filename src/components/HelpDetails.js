import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SUPPORT_TYPE_CDN_LINK } from "../constants";
import Shimmer from "./Shimmer";
import HelpSection from "./HelpSection";

const HelpDetails = () => {
  const [supportTypeData, setSupportTypeData] = useState([]);

  let { supportType } = useParams();

  if (!supportType) {
    supportType = "partner-onboarding";
  }

  //console.log(supportType);

  useEffect(() => {
    if (!supportType) {
      supportType = "partner-onboarding";
    }
    fetchSupportTypeData();
  }, [supportType]);

  const fetchSupportTypeData = async () => {
    const data = await fetch(SUPPORT_TYPE_CDN_LINK + supportType + "?");
    const json = await data.json();
    setSupportTypeData(json?.data?.issues?.data);
    //console.log(supportTypeData);
  };

  //if (!setSupportTypeData) return null;

  return supportTypeData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <h1 className="font-bold text-md capitalize">{supportType}</h1>
      {supportTypeData.map((supportData) => (
        <div key={supportData?.id}>
          <div>
            <HelpSection {...supportData} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HelpDetails;

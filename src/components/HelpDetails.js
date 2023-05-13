import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SUPPORT_TYPE_CDN_LINK } from "../constants";
import Shimmer from "./Shimmer";

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
    // console.log(supportTypeData);
  };

  //if (!setSupportTypeData) return null;

  return supportTypeData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      {supportTypeData.map((supportData) => (
        <li className="list-none" key={supportData?.id}>
          {supportData?.title}
        </li>
      ))}
    </div>
  );
};

export default HelpDetails;

import upArrow from "../assets/images/upArrow.png";
import downArrow from "../assets/images/downArrow.png";

import { useState } from "react";

const HelpSection = ({
  title,
  description,
  hyperLink,
  hyperLinkText,
  options,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  //    console.log(options);
  return (
    <div>
      <div className="flex justify-between">
        <button
          className="hover:text-orange-500"
          onClick={() => {
            isVisible ? setIsVisible(false) : setIsVisible(true);
          }}
        >
          <h1 className="text-xs py-4">{title}</h1>
        </button>

        {isVisible ? (
          <button onClick={() => setIsVisible(false)}>
            <img src={upArrow} alt="Up Arrow" className="w-3" />
          </button>
        ) : (
          <button onClick={() => setIsVisible(true)}>
            <img src={downArrow} alt="Down Arrow" className="w-3" />
          </button>
        )}
      </div>
      {isVisible && (
        <div>
          <h1 className="text-[9px] text-slate-500  whitespace-pre-line">
            {description}
          </h1>
          <a href={hyperLink} target="_blank">
            <h1 className="pb-5 pt-2 text-[9px] font-bold text-orange-500">
              {hyperLinkText}
            </h1>
          </a>
          {options.map((option) => (
            <div key={option.type}>
              <a
                href={`mailto:adarsha4467@gmail.com?subject=I want to partner my restaurant with Swiggy&body=Tell about your restaurant`}
                // href={`mailto:${option.emailId}?subject=I want to partner my restaurant with Swiggy&body=Tell about your restaurant`}
                target="_top"
                className="border border-orange-500 text-orange-500 text-[9px] font-bold p-2"
              >
                SEND AN EMAIL
              </a>
              <h1 className="text-[7px] py-2 text-slate-600">
                {option.waitTime}
              </h1>
            </div>
          ))}
        </div>
      )}

      <hr />
    </div>
  );
};

export default HelpSection;

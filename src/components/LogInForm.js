import LoginIcon from "../assets/images/loginIcon.png";
import { useState } from "react";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import TestPage from "./TestPage";

const LogInForm = () => {
  //   const [isSignup, setIsSignup] = useState(false);
  //   return (
  //     <div className="flex justify-center">
  //       <div className="border border-1 m-5 p-5 w-1/4">
  //         <div className="flex justify-between">
  //           <div>
  //             {isSignup ? (
  //               <div>
  //                 <h1 className="pt-2 font-bold text-sm">Sign up</h1>
  //                 <h1 className="text-[9px]">
  //                   or{" "}
  //                   <button
  //                     className="text-orange-500"
  //                     onClick={() => setIsSignup(false)}
  //                   >
  //                     login to your account
  //                   </button>
  //                 </h1>
  //               </div>
  //             ) : (
  //               <div>
  //                 <h1 className="pt-2 font-bold text-sm">Login</h1>
  //                 <h1 className="text-[9px]">
  //                   or{" "}
  //                   <button
  //                     className="text-orange-500"
  //                     onClick={() => setIsSignup(true)}
  //                   >
  //                     create an account
  //                   </button>
  //                 </h1>
  //               </div>
  //             )}
  //           </div>
  //           <img src={LoginIcon} alt="loginIcon" className="w-16" />
  //         </div>
  //         <form>{isSignup ? <SignUp /> : <LogIn />}</form>
  //       </div>
  //     </div>
  //   );

  return (
    <div>
      <TestPage />
    </div>
  );
};

export default LogInForm;

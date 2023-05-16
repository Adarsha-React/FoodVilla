import { useContext } from "react";
import UserContext from "./UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="m-2 p-4 shadow-sm sticky top-[100vh]">
      <h1 className="font-semibold text-xs text-center">
        © 2023 DeliveryQube India, Inc All rights reserved.
      </h1>
      <h1 className="font-semibold text-xs text-center">{user.name} 🙂</h1>
    </div>
  );
};

export default Footer;

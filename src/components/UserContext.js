import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Adarsha",
    email: "adarsha@gmail.com",
  },
});

export default UserContext;

import { createContext, useState } from "react";

export const ClientContext = createContext();

// eslint-disable-next-line react/prop-types
const ClientProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState({
    msg: "",
    error: false,
  });

  const rebootObject = () => {
    setTimeout(() => {
      setAlert({
        msg: "",
        error: false,
      });
    }, 3000);
  };

  return (
    <ClientContext.Provider
      value={{
        users,
        setUsers,
        alert,
        setAlert,
        rebootObject
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;

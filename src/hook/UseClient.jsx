import { useContext } from "react";
import { ClientContext } from "../context/ClientProvider";

const UseClient = () => {
    return useContext(ClientContext)
}

export default UseClient;
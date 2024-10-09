import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseClient from "../hook/UseClient";
import { uid } from "uid";
import Alert from "./Alert";

const Form = () => {
  const { users, setUsers, alert, setAlert, rebootObject } = UseClient();

  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bussines, setBussines] = useState("");

  const data = {
    id: null,
    name,
    email,
    phone,
    bussines,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(data).some((e) => e === "")) {
      setAlert({
        msg: "Los campos no pueden ir vacíos",
        error: true,
      });
      rebootObject();

      return;
    }

    setUsers([...users, { ...data, id: uid() }]);
    Object.assign(data, {
      id: null,
      name: "",
      email: "",
      phone: "",
      bussines: ""
    });

    navigate("/")
  };

  return (
    <>
      <form className="bg-white p-3" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Nombre Cliente"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Correo
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email Cliente"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="telefono"
          >
            Teléfono
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="telefono"
            name="telefono"
            type="tel"
            placeholder="Teléfono Cliente"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="empresa"
          >
            Empresa
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="empresa"
            name="empresa"
            type="text"
            placeholder="Empresa Cliente"
            value={bussines}
            onChange={(e) => setBussines(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-teal-600 hover:bg-teal-900 w-full mt-5 p-2 text-white uppercase font-bold cursor-pointer"
          value="Agregar Cliente"
        />
      </form>
      {alert.error && <Alert alert={alert && alert} />}
    </>
  );
};

export default Form;

import { useEffect, useState } from "react";
import UseClient from "../hook/UseClient";
import { useParams } from "react-router-dom";

const UpdateClient = () => {
  const { id } = useParams();
  const { users, setUsers } = UseClient();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    bussines: ""
  });

  useEffect(() => {
    const userToEdit = users.find(user => user.id === id);
    if (userToEdit) {
      setUserData(userToEdit);
    } else {
      console.error(`Usuario con ID ${id} no encontrado.`);
    }
  }, [id, users]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUsers = users.map(user =>
      user.id === id ? { ...user, ...userData } : user
    );

    setUsers(updatedUsers);
  };

  return (
    <main>
      <h2 className="text-3xl font-light text-center">Edita el Cliente</h2>

      <div className="flex flex-col mt-10 items-center">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-10/12 md:w-8/12 lg:w-6/12">
          <div className="overflow-hidden sm:rounded-lg border-b border-gray-200 ">
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
                  value={userData.name || ''} 
                  onChange={e => setUserData({ ...userData, name: e.target.value })}
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
                  value={userData.email || ''} 
                  onChange={e => setUserData({ ...userData, email: e.target.value })}
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
                  value={userData.phone || ''} 
                  onChange={e => setUserData({ ...userData, phone: e.target.value })}
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
                  value={userData.bussines || ''} 
                  onChange={e => setUserData({ ...userData, bussines: e.target.value })}
                />
              </div>

              <input
                type="submit"
                className="bg-teal-600 hover:bg-teal-900 w-full mt-5 p-2 text-white uppercase font-bold cursor-pointer"
                value="Editar Cliente"
              />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UpdateClient;

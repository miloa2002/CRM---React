import User from "../components/User";
import UseClient from "../hook/UseClient";

const Home = () => {
  const { users } = UseClient()

  return (
    <>
      <h2 className="text-center text-2xl mb-10">Clientes</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 border-b border-gray-300"
              >
                Nombre Cliente
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 border-b border-gray-300"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 border-b border-gray-300"
              >
                Teléfono
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 border-b border-gray-300"
              >
                Empresa
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 border-b border-gray-300"
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => (
                <User user={user} key={user.id} />
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;

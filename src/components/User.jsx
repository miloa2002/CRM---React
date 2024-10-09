/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useNavigate } from "react-router-dom";
import UseClient from "../hook/UseClient";

const User = ({ user }) => {
  const { users, setUsers } = UseClient()

  const navigate = useNavigate()

  const deleteUser = (id) => {
    setUsers(
      users.filter(user => user.id !== id)
    )
  }

  const editUser = (user) => {
    navigate(`editar-cliente/${user.id}`)
  }

  return (
    <tr className="bg-white border-b border-gray-200 hover:bg-orange-50 transition duration-300 ease-in-out">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900">
        {user.name}
      </th>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900">
        {user.email}
      </th>
      <td className="px-6 py-4 text-gray-700">{user.phone}</td>
      <td className="px-6 py-4 text-gray-700">{user.bussines}</td>
      <td className="px-6 py-4 text-gray-700">
        <button 
          className="text-blue-600 hover:text-blue-900 mr-5"
          onClick={() => editUser(user)}
        >
          Editar
        </button>
        <button 
          className="text-red-600 hover:text-red-900"
          onClick={() => deleteUser(user.id)}
        >Eliminar</button>
      </td>
    </tr>
  );
};

export default User;

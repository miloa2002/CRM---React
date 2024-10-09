import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="md:flex h-screen">
        <div className="bg-teal-600 w-full md:w-1/6 p-4 space-y-9">
          <h1 className="text-white font-bold text-2xl">CRM - JSONSERVER</h1>
          <p className="text-white">Administra tus Clientes con el CRM</p>

          <nav className="flex flex-col gap-4 text-white">
            <NavLink 
              className={({ isActive }) => `font-semibold hover:bg-teal-700 transition-colors p-2 rounded-md ${isActive ? 'bg-teal-800' : ''}`}
              to={"/"}
            >
              Clientes
            </NavLink>
            <NavLink 
              className={({ isActive }) => `font-semibold hover:bg-teal-700 transition-colors p-2 rounded-md ${isActive ? 'bg-teal-800' : ''}`}
              to={"/nuevo-cliente"}
            >
              Nuevo cliente
            </NavLink>
          </nav>
        </div>
        <div className="w-full md:w-5/6 bg-gray-100 p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;

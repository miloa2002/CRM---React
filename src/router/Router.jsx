import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import NewClient from "../pages/NewClient";
import UpdateClient from "../pages/UpdateClient";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="nuevo-cliente" element={<NewClient />} />
                <Route path="editar-cliente/:id" element={<UpdateClient />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
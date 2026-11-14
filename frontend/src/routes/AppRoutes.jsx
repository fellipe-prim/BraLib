import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Catalogo from "../pages/Catalogo";
import DetalhesLivro from "../pages/DetalhesLivro";
import Checkout from "../pages/Checkout";
import Carrinho from "../pages/Carrinho";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/livro/:id" element={<DetalhesLivro />} />
      <Route path="/checkout/:id" element={<Checkout />} />
      <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
  );
}

export default AppRoutes;
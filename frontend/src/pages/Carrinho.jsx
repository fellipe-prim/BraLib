import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

function Carrinho() {
  const { livrosCarrinho } = useContext(CarrinhoContext);

  return (
    <div>
      <h1>Meu Carrinho</h1>

      {livrosCarrinho.map((livro, index) => (
        <p key={index}>{livro.titulo}</p>
      ))}
    </div>
  );
}

export default Carrinho;
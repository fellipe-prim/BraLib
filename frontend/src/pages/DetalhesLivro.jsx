import { useParams } from "react-router-dom";
import { livros } from "../data/livros";
import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

function DetalhesLivro() {
  const { livrosCarrinho, setLivrosCarrinho } = useContext(CarrinhoContext);
  // pega os parâmetros da URL
  const { id } = useParams();
  const livro = livros.find((livro) => livro.id === Number(id));

  if (!livro) {
    return <h1>Livro não encontrado!</h1>;
  }

  return (
    <div>
      <h1>{livro.titulo}</h1>
      <p>Autor: {livro.autor}</p>
      <p>{livro.descricao}</p>
      <p>Preço: R$ {livro.preco}</p>
      <img src={livro.imagem} alt={livro.titulo} />
      <button onClick={() => setLivrosCarrinho([...livrosCarrinho, livro])}>
        Adicionar ao carrinho
      </button>
      ;
    </div>
  );
}

export default DetalhesLivro;

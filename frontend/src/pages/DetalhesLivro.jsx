import { useParams } from "react-router-dom";
import { livros } from "../data/livros";
import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

function DetalhesLivro() {
  const { livrosCarrinho, setLivrosCarrinho } = useContext(CarrinhoContext);

  const { id } = useParams();
  const livro = livros.find((livro) => livro.id === Number(id));

  if (!livro) {
    return (
      <main className="min-h-screen bg-[#111111] flex items-center justify-center">
        <h1 className="text-2xl text-zinc-200">
          Livro não encontrado!
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#111111] text-zinc-200">
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Capa */}
          <div className="bg-[#1b1b1b] p-10 md:p-16 flex items-center justify-center">
            <img
              src={livro.imagem}
              alt={livro.titulo}
              className="max-h-[500px] max-w-full object-contain"
            />
          </div>

          {/* Informações */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6">
              BraLib Collection
            </p>

            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-5">
              {livro.titulo}
            </h1>

            <p className="text-zinc-400 mb-8">
              Autor: {livro.autor}
            </p>

            <div className="border-t border-zinc-800 pt-8">
              <p className="text-zinc-400 leading-8 mb-10">
                {livro.descricao}
              </p>

              <p className="text-3xl font-light text-white mb-8">
                R$ {livro.preco}
              </p>

              <button
                onClick={() =>
                  setLivrosCarrinho([...livrosCarrinho, livro])
                }
                className="bg-white text-black px-10 py-4 text-sm font-medium hover:bg-zinc-300 transition-colors cursor-pointer"
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default DetalhesLivro;
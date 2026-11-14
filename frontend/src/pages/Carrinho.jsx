import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

function Carrinho() {
  const { livrosCarrinho } = useContext(CarrinhoContext);

  return (
    <main className="min-h-screen bg-[#111111] text-zinc-200">
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16">

        {/* Cabeçalho */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-5">
            BraLib Collection
          </p>

          <h1 className="text-4xl md:text-5xl font-light">
            Meu Carrinho
          </h1>
        </div>

        {/* Livros do carrinho */}
        <div className="space-y-6">
          {livrosCarrinho.map((livro, index) => (
            <div
              key={index}
              className="flex items-center gap-8 bg-[#1b1b1b] p-6"
            >
              {/* Capa */}
              <div className="w-24 h-32 shrink-0 flex items-center justify-center">
                <img
                  src={livro.imagem}
                  alt={livro.titulo}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Informações */}
              <div>
                <h2 className="text-xl font-light text-white mb-3">
                  {livro.titulo}
                </h2>

                <p className="text-sm text-zinc-500 mb-4">
                  {livro.autor}
                </p>

                <p className="text-lg text-zinc-200">
                  R$ {livro.preco}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}

export default Carrinho;
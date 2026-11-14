import BookCard from "../components/BookCard";
import { useState } from "react";
import { livros } from "../data/livros";

function Catalogo() {
  const [busca, setBusca] = useState("");

  const livrosFiltrados = livros.filter((livro) =>
    livro.titulo.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        {/* Cabeçalho */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-5">
            BraLib Collection
          </p>

          <h1 className="text-4xl md:text-5xl font-light">
            Catálogo de Livros
          </h1>
        </div>

        {/* Pesquisa */}
        <input
          type="text"
          placeholder="Pesquisar livros..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full bg-[#1b1b1b] border border-zinc-800 px-5 py-4 mb-12 text-zinc-200 placeholder:text-zinc-500 outline-none focus:border-zinc-500 transition-colors"
        />

        {/* Livros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {livrosFiltrados.map((livro) => (
            <BookCard key={livro.titulo} book={livro} />
          ))}
        </div>

      </section>
    </main>
  );
}

export default Catalogo;
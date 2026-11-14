import BookCard from "../components/BookCard";
import { useState } from "react";
import { livros } from "../data/livros";

function Catalogo() {
  const [busca, setBusca] = useState("");

  const livrosFiltrados = livros.filter((livro) =>
    livro.titulo.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <div>
      <h1>Catálogo</h1>

      <input
        type="text"
        placeholder="Pesquisar livros..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {livrosFiltrados.map((livro) => (
        <BookCard key={livro.titulo} book={livro} />
      ))}
    </div>
  );
}

export default Catalogo;

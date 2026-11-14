import BookCard from "../components/BookCard";
import { useState } from "react";

function Catalogo() {
  const [busca, setBusca] = useState("");
  const livros = [
    {
      titulo: "Clean Code",
      autor: "Robert C. Martin",
      descricao: "Um livro sobre boas práticas de programação.",
      preco: 89.9,
      imagem: "https://via.placeholder.com/150",
    },
    {
      titulo: "Java Efetivo",
      autor: "Joshua Bloch",
      descricao: "Boas práticas para Java.",
      preco: 99.9,
      imagem: "https://via.placeholder.com/150",
    },
  ];

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

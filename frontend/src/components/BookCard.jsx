import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <Link to={`/livro/${book.id}`}>
      <div className="bookCard">
        <h2>{book.titulo}</h2>
        <p>{book.autor}</p>
        <p>{book.descricao}</p>
        <p>Preço: R${book.preco}</p>
        <img src={book.imagem} alt={book.titulo} />
      </div>
    </Link>
  );
}

export default BookCard;
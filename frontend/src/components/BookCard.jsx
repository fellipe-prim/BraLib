function BookCard({ book }) {
  return (
    <div className="bookCard">
      <img src={book.imagem} alt={book.titulo} />
      <h2>{book.titulo}</h2>
      <p>{book.autor}</p>
      <p>{book.descricao}</p>
      <p>Preço: R$ {book.preco}</p>
    </div>
  );
}

export default BookCard;

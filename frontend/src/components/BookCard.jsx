import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <Link to={`/livro/${book.id}`} className="group block">
      <div className="bg-[#1b1b1b] p-5 h-full">

        {/* Capa do livro */}
        <div className="h-72 flex items-center justify-center overflow-hidden">
          <img
            src={book.imagem}
            alt={book.titulo}
            className="h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Informações */}
        <div className="mt-6">
          <h2 className="text-lg font-medium text-zinc-100">
            {book.titulo}
          </h2>

          <p className="text-sm text-zinc-500 mt-2">
            {book.autor}
          </p>

          <p className="text-base text-zinc-200 mt-5">
            R$ {book.preco}
          </p>
        </div>

      </div>
    </Link>
  );
}

export default BookCard;
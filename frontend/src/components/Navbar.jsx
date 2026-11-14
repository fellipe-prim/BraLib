import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#111111] border-b border-[#252525] px-12 py-6 flex items-center justify-between">
      <Link
        to="/"
        className="text-2xl font-semibold tracking-tight text-white"
      >
        BraLib.
      </Link>

      <div className="flex items-center gap-10 text-sm">
        <Link
          to="/login"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          Login
        </Link>

        <Link
          to="/catalogo"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          Catálogo
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
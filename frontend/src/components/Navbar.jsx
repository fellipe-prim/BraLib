import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">BraLib</Link>
      <Link to="/login">Login</Link>
      <Link to="/catalogo">Catálogo</Link>
    </nav>
  );
}

export default Navbar;
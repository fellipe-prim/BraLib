import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { CarrinhoProvider } from "./context/CarrinhoContext";

function App() {
  return (
    <BrowserRouter>
      <CarrinhoProvider>
        <Navbar />
        <AppRoutes />
      </CarrinhoProvider>
    </BrowserRouter>
  );
}

export default App;
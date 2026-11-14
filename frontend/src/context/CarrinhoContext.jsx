import { createContext } from "react";
import { useState } from "react";

export const CarrinhoContext = createContext(null);

export function CarrinhoProvider({ children }) {
    const [livrosCarrinho, setLivrosCarrinho] = useState([]);

    return (
        <CarrinhoContext.Provider value={{ livrosCarrinho, setLivrosCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
}
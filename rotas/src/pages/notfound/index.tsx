import { Link } from "react-router-dom"

export function NotFound(){
    return(
        <div>
            <h1>
                Erro 404 - Página não encontrada
            </h1>
            <Link to="/">Acessar Home</Link>
        </div>
    )
}
import { Link } from "react-router-dom";

export function Contato(){
    return(
        <div>
            <h1>Bem vindo a pagina contatos</h1>
            <h3>Telefone: (xx) x xxxx-xxxx</h3>


            <Link to="/sobre">Sobre</Link>
            <br />
            <Link to="/">Home</Link>
        </div>
    )
}
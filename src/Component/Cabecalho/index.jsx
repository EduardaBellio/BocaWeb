import Logo from "./img/logobocaweb.png";

export const Cabecalho = () => {
    return(
        <div className = "Cabecalho">
            <a href="http://www.bocaweb.com.br/" target="blank"><img src={Logo} alt="Logo BocaWeb" className="logo"/></a>
            <div className = "titulo-cabecalho">
                <h1>BocaWeb </h1>
                <h2>O seu portal de Audiodescrição</h2>
            </div>
        </div>
    )
}
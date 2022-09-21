export const Lista = ({nome, usuario, descricao, data_inclusao, palavras_chave}) => {
    return(
        <div className='lista'>
            <div className= "lista-conteudo">
                
                    <div className="titulo"><h1>{nome}</h1></div>
                    <div className="data"><p>{data_inclusao}</p>
            
                <p>produced by: {usuario}</p></div>
                <p>{descricao}</p>
                <p>palavras-chave: {palavras_chave}</p>
            </div>
        </div>
    )
}
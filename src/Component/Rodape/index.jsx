import LOGOIFMS from './img/logo_ifms.png';

export const Rodape = () => {

    return(
  
            <div className='Rodape'>
                <div id= "leftbox">
                    <a href="https://www.ifms.edu.br/campi/campus-dourados" target="blank"><img src={LOGOIFMS} alt="logo" className="Logoifms"/></a>
                </div>
                <div id="rightbox">
                    <p>TRABALHO DE FRAMEWORKS 2</p>
                    <p>Ana Julia Motyczka Finck e Eduarda Béllio Henn</p>
                </div>
            </div>
    
    )
}
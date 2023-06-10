import "./css/footer.css"
import React from "react";
import Wee from "./assets/image/party.png"
import Bad from "./assets/image/sad.png"

    function Etapas ({ etapas, ponto }) {

        if(ponto === 12 || ponto === 11 || ponto === 10) {
            return (
                <div className="footer">
                    <div className="resposta-final">
                        <img src={Wee} alt="wee"/><p>Parabéns!</p>
                    </div>    
                    <p className="resp">Você não esqueceu de nenhum flashcard!</p>                
                    <p className="result">{etapas}/4 CONCLUÍDOS</p>
                </div>
            )
        }
        
        if (ponto === 4 || ponto === 5 || ponto === 6 || ponto === 7) {
            return (
                <div className="footer">
                    <div className="resposta-final">
                        <img src={Bad} alt="wee"/><p>Putz...</p>
                    </div>    
                    <p className="resp">Ainda faltam alguns... Mas não desanime!</p>                
                    <p className="result">{etapas}/4 CONCLUÍDOS</p>
                </div>
            )
        }

            return (
                <div className="footer">
                    <p>{etapas}/4 CONCLUÍDOS</p>
                </div>
            )
        }

export default function Footer ({ etapas, ponto }) {
    return (
        <Etapas etapas={etapas} ponto={ponto}/>
    )
}
import { Link } from "react-router-dom";

import "./css/init.css";
import logotipo from "./assets/image/Glogo.png";


export default function Init () {
    return (
        <div className="desktop">
            <div className="init">
                <span className="logo">
                    <img src={logotipo} alt="Logo"/>
                    <h1>ZapRecall</h1>
                </span>
                <button><span><Link to="/firstpage">Iniciar Recall!</Link></span></button>
            </div>
        </div>
    )
}
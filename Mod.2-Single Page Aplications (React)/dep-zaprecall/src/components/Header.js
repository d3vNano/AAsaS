import "./css/header.css"
import logotipo from "./assets/image/logo.png";

export default function Header () {
    return (
            <div className="logo-block">
                <span className="general-logo">
                    <img src={logotipo} alt="Logo"/>
                    <h1>ZapRecall</h1>
                </span>
            </div>
    )
}
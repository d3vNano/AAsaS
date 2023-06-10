import logo from "../../../assets/img/logo.png";

function Logo (){
    return (
        <div className="react">
                <div className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="separador"></div>
                    <img src={logo} alt="logo"/>
                </div>

                <div className="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div className="instagram-mobile">
                    <img src={logo} alt="logo-mobile"/>
                </div>
        </div>
    )
}

export default Logo;


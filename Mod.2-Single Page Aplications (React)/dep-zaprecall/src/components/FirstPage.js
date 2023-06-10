    //import { Link } from "react-router-dom";

    import "./css/firstpage.css";

    import Recalls from "./Recalls";
    import Footer from "./Footer";
    import Header from "./Header";

    import React from "react";

export default function FirstPage () {

    const [etapas, setEtapas] = React.useState(0);
    const [icon, setIcon] = React.useState();
    const [ponto, setPonto] = React.useState(0);

    return (
        <div className="body-class">
            <div className="first-page">
                <Header />
                <Recalls setEtapas={setEtapas} setPonto={setPonto} />
                <Footer etapas={etapas} ponto={ponto}/>
            </div>
        </div>
    )
}
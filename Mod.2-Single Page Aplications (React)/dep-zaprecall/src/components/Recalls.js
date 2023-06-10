import React from "react"
import "./css/recalls.css"

const contRecall = [

    {
        Q: "O que é JSX?",
        R: "Uma extensão de linguagem do JavaScript."
    },

    {
        Q: "O React é __",
        R: "Uma biblioteca JavaScript para construção de interfaces"
    },

    {
        Q: "Componentes devem iniciar com __",
        R: "Letra maiúscula"
    },

    {
        Q: "Podemos colocar __ dentro do JSX",
        R: "Expressões"
    },

    {
        Q: "O ReactDOM nos ajuda __",
        R: "Interagindo com a DOM para colocar componentes React na mesma"
    },

    {
        Q: "Usamos o npm para __",
        R: "Gerenciar os pacotes necessários e suas dependências"
    },

    {
        Q: "Usamos props para __",
        R: "Passar diferentes informações para componentes"
    },

    {
        Q: "Usamos estado (state) para __",
        R: "Dizer para o React quais infos quando atualizadas devem renderizar a tela novamente"
    }
]

function Question ( { Q, R, id, setEtapas, setPonto } ) {

    const [nop, setNop] = React.useState();
    const [nhe, setNhe] = React.useState();
    const [yep, setYep] = React.useState();
    const [resp, setResp] = React.useState();

        if (nop) {
            return (
                <div className="deck red">
                    <p>Pergunta {id+1}</p>
                    <ion-icon name="close-circle"></ion-icon>
                </div>
            )
        }

        if (nhe) {
            return (
                <div className="deck yellow">
                    <p>Pergunta {id+1}</p>
                    <ion-icon name="help-circle"></ion-icon>
                </div>
            )
        }

        if (yep) {
            return (
                <div className="deck green">
                    <p>Pergunta {id+1}</p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            )
        }

        if (resp) {
    
            return (
                <div className="question">
                    <p>{R}</p>
                    <div>
                        <button className="red" onClick={() => {setNop(true); setEtapas(previous => previous + 1); setPonto(1)}}>Não lembrei</button>
                        <button className="yellow" onClick={() => {setNhe(true); setEtapas(previous => previous + 1); setPonto(2)}}>Quase não lembrei</button>
                        <button className="green" onClick={() => {setYep(true); setEtapas(previous => previous + 1); setPonto(3)}}>ZAP!</button>
                    </div>
                </div>
            )
        }

    return (
        <div className="question" onClick={() => setResp(true)}>
            <p>{Q}</p>
            <ion-icon name="reload-outline"></ion-icon>
        </div>
    )
}

function RecallCont ({ id, setEtapas, setPonto}) {
    const [question, setQuestion] = React.useState();

    if (question) {

        return (
            <div>
                    <Question Q={contRecall[id].Q} R={contRecall[id].R} id={id} setEtapas={setEtapas} setPonto={setPonto} />
            </div>
        )
    }

    return (
        <div className="deck" onClick={() => setQuestion(true)}>
            <p>Pergunta {id +1}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}

function Recalls ({ setEtapas, setPonto }) {

    const shuffle = contRecall.sort(() => Math.random() - 0.5).slice(4);

    return (
        <div className="recalls">
            {shuffle.map((e, index) => (
                <RecallCont key={index} id={index} setEtapas={setEtapas} setPonto={setPonto}/>
            ))}
        </div>
    )

}

export default Recalls;
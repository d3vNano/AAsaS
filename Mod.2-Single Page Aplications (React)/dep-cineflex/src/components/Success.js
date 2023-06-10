import { useNavigate } from "react-router-dom";
import styled from "styled-components"

function Sucess({ date, day, hour, film, nome, cpf, ids }) {

    const navigate = useNavigate();

    return (
        <Container>
            <div className="daddy">
                <h6>Pedido feito com sucesso!</h6>
                <div className="align">
                    <div className="block">
                        <h5>Filme e sessão</h5>
                        <p>{film.title}</p>
                        <p>{day} {date} {hour}</p>
                    </div>
                    <div className="block">
                        <h5>Ingressos</h5>
                        <p>{ids}</p>
                    </div>
                    <div className="block">
                        <h5>Comprador</h5>
                        <p>Nome: {nome}</p>
                        <p>CPF: {cpf}</p>
                    </div>
                </div>
            </div>
            <button onClick={() => { navigate("../") }}>Voltar para Home</button>
        </Container>
    )
}

export default Sucess;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h6 {
        width: 250px;
        margin-bottom: 30px;

        font-weight: 700;
        font-size: 24px;

        display: flex;
        align-items: center;
        justify-content: center;

        text-align: center;
        letter-spacing: 0.04em;

        color: #247A6B;
    }

    h5 {
        margin-bottom: 10px;

        font-weight: 700;
        font-size: 24px;
        letter-spacing: 0.04em;

        color: #293845;
    }

    p {
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;

        color: #293845;
    }

    .align {
        display: flex;
        flex-direction: column;
    }

    .block {
        margin-bottom: 40px;
    }

    button {
        width: 225px;
        height: 42px;
        margin-top: 150px;

        background-color: #E8833A;
        border: none;
        border-radius: 3px;

        font-size: 18px;
        font-weight: 400;
        text-align: center;
        color: #FFFFFF;

        cursor: pointer;
    }
`
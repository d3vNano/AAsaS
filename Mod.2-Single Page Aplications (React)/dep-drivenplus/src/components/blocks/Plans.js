import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";

import UserContext from "../contexts/UserContext";
import CardForm from "./CardForm";
import Confirm from "./Confirm";

function Plans() {

    const { plan, conf, loggedUser, setConf, setPlans } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <Screen>
            <Confirm />
            <Return onClick={() => navigate("/subscriptions")}>
                <ion-icon name="arrow-back-outline"></ion-icon>
            </Return>

            <Head>
                <img src={plan.image} alt={plan.id} />
                <p>{plan.name}</p>
            </Head>
            <Body>
                <Title>
                    <ion-icon name="newspaper-outline"></ion-icon>
                    <p>Benefícios:</p>
                </Title>
                <p> 1. Brindes exclusivos</p>
                <p> 2. Materiais bônus de web </p>

                <Title>
                    <ion-icon name="cash"></ion-icon>
                    <p>Preço:</p>
                </Title>

                <p>R$ {plan.price} cobrados mensalmente</p>
            </Body>
            <CardForm />

        </Screen>
    )
}

export default Plans;

const Screen = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Return = styled.p`

    ion-icon {
        display: flex;
        position: fixed;

        top: 10px;
        left: 10px;
        font-size: 45px;
        font-weight: bold;
        color: white;
    }
`

const Head = styled.div`
    margin-top: 25px;
    margin-bottom: 15px;

    display: flex;
    flex-direction: column;

    img {
        width: 150px;
        margin-bottom: 15px;
    }

    p {
        font-size: 30px;
        font-weight: 700;
    }
`

const Body = styled.div`
    width: 300px;
    margin-bottom: 35px;

    div {
        display: flex;
    }

    ion-icon {
        color: #FF4791;
        margin-right: 5px;
    }

    p {
        font-size: 16px;
        margin-bottom: 5px;
    }
`

const Title = styled.div`
    margin-top: 15px;
    margin-bottom: 5px;
`
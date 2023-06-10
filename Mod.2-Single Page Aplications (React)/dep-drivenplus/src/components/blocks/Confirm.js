import { useContext } from "react";

import styled from "styled-components";
import axios from "axios";

import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Confirm() {
    const { plan, conf, loggedUser, setConf, setPlans } = useContext(UserContext);
    const navigate = useNavigate();

    if (!conf) return null

    const { name, price } = plan;

    function Enviar() {

        const body = {
            membershipId: plan.id,
            cardName: plan.cardname,
            cardNumber: plan.cardnumber,
            securityNumber: plan.cardcode,
            expirationDate: plan.cardval
        }

        const config = {
            headers: {
                Authorization: "Bearer " + loggedUser.token
            }
        }

        axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", body, config)
            // faz aparecer a confirmação antes
            .then(() => {
                alert("Seja bem-vindo!")
                navigate("/home")
            })
            .catch(error => {
                setPlans("disabled", false)

                alert("deu ruim")
            })
    }

    return (

        <Screen>
            <ReturnX>
                <ion-icon onClick={() => setConf(false)} name="backspace"></ion-icon>
            </ReturnX>
            <PopUp>
                <p>Tem certeza que deseja assinar o plano:</p>
                <p>{name} (R$ {price}?)</p>
                <div>
                    <ButtonN onClick={() => setConf(false)}>NÃO</ButtonN>
                    <ButtonY onClick={() => Enviar()}>SIM</ButtonY>
                </div>
            </PopUp>
        </Screen>
    )
}

export default Confirm;

const Screen = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    background-color: rgba(14, 14, 19, 0.85);
`

const ReturnX = styled.p`

    ion-icon {
        display: flex;
        position: fixed;

        top: 10px;
        right: 10px;

        font-size: 45px;
        font-weight: bold;
        color: white;
    }
`

const PopUp = styled.div`
    width: 250px;
    height: 210px;
    padding: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 12px;
    background-color: #FFFFFF;
    color: #000000;

    p {
        margin-bottom: 7.5px;
        color: #000000 !important;

        font-size: 18px;
        font-weight: 700;
        text-align: center;
    }
`

const ButtonN = styled.button`
    width: 95px;
    height: 50px;
    margin-top: 30px;
    margin-right: 5px;

    background: #CECECE;
    border-radius: 8px;
    border: none;
    outline: none;
`

const ButtonY = styled.button`
    width: 95px;
    height: 50px;
    margin-top: 30px;
    margin-left: 5px;

    background: #FF4791;
    border-radius: 8px;
    border: none;
    outline: none;
`
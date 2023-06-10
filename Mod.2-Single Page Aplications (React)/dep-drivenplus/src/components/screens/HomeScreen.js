import { useContext } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import UserContext from "../contexts/UserContext";

function HomeScreen() {

    const { loggedUser } = useContext(UserContext);

    const { id, image, name, price, perks } = loggedUser.membership;

    console.log(loggedUser)


    return (
        <Screen>
            <Header>
                <div>
                    <img src={image} alt={name} />
                    <ion-icon name="person-circle"></ion-icon>
                </div>
                <p>Olá, {loggedUser.name}</p>
            </Header>
            {perks.map((perk, index) => <a href={perk.link} target="_blank"><Linkes key={index}>{perk.title}</Linkes></a>)}
            <Footer>
                <PButton>
                    Mudar Plano
                </PButton>
                <CButton>
                    Cancelar Plano
                </CButton>
            </Footer>
        </Screen>
    )
}

export default HomeScreen;

const Screen = styled.div`
    width: 100vw;
    height: 100vh;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.div`
    width: 100vw;
    padding: 0 20px;
    margin-top: 25px;

    >div {
        display: flex;
        justify-content: space-between;
    }

    ion-icon {
        font-size: 45px;
    }

    div>img {
        width: 95px;
    }

    >p {
        margin-top: 15px;
        margin-bottom: 40px;
        font-size: 24px;
        font-weight: 700;
        text-align: center;
    }
`

const Linkes = styled.button`
    width: 299px;
    height: 52px;
    margin-top: 10px;

    background-color: #FF4791;
    border: none;
    border-radius: 8px;

    color: white;
`

const Footer = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: end;
`

const PButton = styled.button`
    width: 299px;
    height: 52px;
    margin-bottom: 10px;

    background-color: #FF4791;

    border: none;
    border-radius: 8px;

    color: white;
`

const CButton = styled.button`
    width: 299px;
    height: 52px;
    margin-bottom: 25px;

    background-color: #FF4747;

    border: none;
    border-radius: 8px;

    color: white;
`
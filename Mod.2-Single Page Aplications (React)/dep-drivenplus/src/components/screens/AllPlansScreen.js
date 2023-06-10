import { useContext, useEffect } from "react";

import styled from "styled-components";
import axios from "axios";

import UserContext from "../contexts/UserContext";

import AllPlans from "../blocks/AllPlans";

function AllPlansScreen() {

    const { loggedUser, allplans, setAllPlans } = useContext(UserContext);

    const config = {
        headers: {
            Authorization: "Bearer " + loggedUser.token
        }
    }
    useEffect(() => {

        axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', config)
            .then(answer => {
                setAllPlans([...answer.data])
            })
            .catch(error => console.log("deu ruim"));
        // eslint-disable-next-line
    }, [])

    return (
        <Screen>
            <Title>Escolha seu plano</Title>
            {allplans.map((plan, index) => (
                <AllPlans
                    key={index}
                    id={plan.id}
                    image={plan.image}
                    price={plan.price}
                />
            ))}
        </Screen>
    )
}

export default AllPlansScreen;

const Screen = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.p`
    color: white;
    font-size: 32px;
    font-weight: 700;

    margin-bottom: 20px;
`
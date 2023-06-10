import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";

import UserContext from "../contexts/UserContext";
import Plans from "../blocks/Plans";

function PlanScreen() {

    const { loggedUser, setPlan } = useContext(UserContext);
    const { idPlans } = useParams();

    const config = {
        headers: {
            Authorization: "Bearer " + loggedUser.token
        }
    }
    console.log(loggedUser)

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlans}`, config)
            .then(answer => {
                setPlan(answer.data)
            })
            .catch(error =>
                console.log("deu ruim")
            )
        // eslint-disable-next-line
    }, [])

    return (
        <Screen>
            <Plans
            />
        </Screen>
    )
}
export default PlanScreen;

const Screen = styled.div`
    p {
        color: white;
    }
`
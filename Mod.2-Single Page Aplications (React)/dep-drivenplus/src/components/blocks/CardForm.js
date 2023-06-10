import { useState, useContext } from "react";
import { Bars } from "react-loader-spinner";

import styled from "styled-components";
import axios from "axios";

import UserContext from "../contexts/UserContext";

import Confirm from "./Confirm";


function CardForm() {

    const { loggedUser, plan, setConf, setPlans } = useContext(UserContext);

    function submitForm(event) {
        event.preventDefault();

        setPlans("disabled", false)
        setConf(true)

    }

    return (
        <Form onSubmit={(e) => submitForm(e)}>
            <Inputg type="text" placeholder="Nome impresso no cartão" value={plan.cardname} onChange={e => setPlans("cardname", e.target.value)} disabled={plan.disabled} />
            <Inputg type="text" placeholder="Digitos do cartão" value={plan.cardnumber} onChange={e => setPlans("cardnumber", e.target.value)} disabled={plan.disabled} />
            <div>
                <Inputp type="password" placeholder="Código de segurança" value={plan.cardcode} onChange={e => setPlans("cardcode", e.target.value)} disabled={plan.disabled} />
                <Inputp type="text" placeholder="Validade" value={plan.cardval} onChange={e => setPlans("cardval", e.target.value)} disabled={plan.disabled} />
            </div>
            <Button disabled={plan.disabled}> {plan.disabled ? <Bars color="white" height={35} width={100} />
                : "ASSINAR"}</Button>
        </Form>
    )
}

export default CardForm;

const Form = styled.form`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        justify-content: space-between;
    }
`

const Inputg = styled.input`
        width: 300px;
        height: 50px;

        margin-top: 2.5px;
        margin-bottom: 5px;
        padding-left: 10px;

        border: 1px solid #D5D5D5;
        border-radius: 5px;
        outline-color: #DBDBDB;

        color: #666666;
        display: flex;
        align-items: center;

        ::placeholder {
            color: #DBDBDB;
            font-size: 14px;
        }

        &:disabled{
            background-color: #F2F2F2;
            color: #AFAFAF;
            border: 1px solid #D5D5D5;;
        }
`

const Inputp = styled.input`
        width: 146.5px;
        height: 50px;

        margin-top: 2.5px;
        margin-bottom: 10px;
        padding-left: 5px;

        border: 1px solid #D5D5D5;
        border-radius: 5px;
        outline-color: #DBDBDB;

        color: #666666;
        display: flex;
        align-items: center;

        ::placeholder {
            color: #DBDBDB;
            font-size: 14px;
        }

        &:disabled{
            background-color: #F2F2F2;
            color: #AFAFAF;
            border: 1px solid #D5D5D5;;
        }
`

const Button = styled.button`
    height: 55px;
    margin-top: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #FF4791;
        
    font-size: 21px;
    color: white;

    border-radius: 5px;
    border: none;

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        background-color: #d43977;
    }
`
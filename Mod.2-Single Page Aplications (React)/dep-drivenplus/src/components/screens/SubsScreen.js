import styled from "styled-components";
import axios from "axios";

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";

import logo from "../../assets/img/driven+logo.svg";

function SubsScreen() {
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        email: "",
        name: "",
        cpf: "",
        password: ""
    })
    const [disabled, setDisabled] = useState(false);

    function clearInputs() {
        setNewUser({
            email: "",
            name: "",
            cpf: "",
            password: ""
        })
    }

    function submitForm(event) {
        event.preventDefault();

        /*        if (!newUser.cpf.startsWith("https://")) {
                    alert("Insira um número cpf válido!");
                    return;
                }
        */
        setDisabled(true);
        axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", newUser)
            .then(answer => {
                alert("Cadastro concluído! Agora faça o login")
                navigate('/')
            })
            .catch(error => {
                alert("Falha no cadastro! Tente novamente.")
                clearInputs();
                setDisabled(false);
            })
    }

    return (
        <Screen>
            <Link to='/'> <img src={logo} alt="" /> </Link>

            <Form onSubmit={submitForm} >
                <Input type='text' placeholder='nome' value={newUser.name} onChange={e => setNewUser({ ...newUser, name: e.target.value })} disabled={disabled} />
                <Input type='text' placeholder='cpf' value={newUser.cpf} onChange={e => setNewUser({ ...newUser, cpf: e.target.value })} disabled={disabled} />
                <Input type="email" placeholder='e-mail' value={newUser.email} onChange={e => setNewUser({ ...newUser, email: e.target.value })} disabled={disabled} />
                <Input type='password' placeholder='senha' value={newUser.password} onChange={e => setNewUser({ ...newUser, password: e.target.value })} disabled={disabled} />

                <Button disabled={disabled}>{disabled ? <Bars color="white" height={35} width={100} />
                    : "Cadastrar"}</Button>
            </Form>

            <Link to='/'><Join>Já tem uma conta? Faça login!</Join></Link>
        </Screen>
    )
}

export default SubsScreen;

const Screen = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin-bottom: 75px;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
        width: 300px;
        height: 45px;

        margin-top: 5px;
        margin-bottom: 10px;
        padding-left: 10px;

        border: 1px solid #D5D5D5;
        border-radius: 5px;

        outline-color: #DBDBDB;

        display: flex;
        align-items: center;

        ::placeholder {
            color: #DBDBDB;
            font-size: 20px;
        }

        &:disabled{
            background-color: #F2F2F2;
            color: #AFAFAF;
            border: 1px solid #D5D5D5;
        }
`

const Button = styled.button`
    height: 45px;
    margin-top: 10px;

    background-color: #FF4791;
    display: flex;
    justify-content: center;
    align-items: center;
        
    font-size: 21px;
    color: white;

    border-radius: 5px;
    border: 0;

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        background-color: #d43977;
    }
`

const Join = styled.p`
    color: #FF4791;
    font-size: 14px;
    margin-top: 25px;

    text-decoration-line: underline;
`
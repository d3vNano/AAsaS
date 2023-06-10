import styled from "styled-components";
import axios from "axios";

import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";

import UserContext from "../contexts/UserContext";

import logo from "../../assets/img/driven+logo.svg";

function InitialScreen() {
    const navigate = useNavigate();

    const { setLoggedUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);

    function submitForm(event) {
        event.preventDefault();

        const user = { email: email, password: password }
        setDisabled(true);

        axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", user)
            .then(answer => {
                window.localStorage.setItem("user", JSON.stringify(answer.data))
                setLoggedUser(answer.data)
                if (answer.data.membership === null) {
                    navigate("/subscriptions");
                } else {
                    navigate("/home");
                }
            })
            .catch(error => {
                setDisabled(false);
                alert("Login ou senha errados! Tente novamente.")
            })
    }

    return (
        <Screen>
            <img src={logo} alt="" />

            <Form onSubmit={submitForm}>
                <Input type="email" placeholder="e-mail" value={email} onChange={e => setEmail(e.target.value)} disabled={disabled} />
                <Input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} disabled={disabled} />
                <Button disabled={disabled}> {disabled ? <Bars color="white" height={35} width={100} />
                    : "Entrar"}</Button>
            </Form>

            <Link to='/sign-up'><Cadastro>Não tem uma conta? Cadastre-se!</Cadastro></Link>
        </Screen>
    )
}

export default InitialScreen;

const Screen = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin-bottom: 100px;
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

        color: #666666;
        display: flex;
        align-items: center;

        ::placeholder {
            color: #DBDBDB;
            font-size: 20px;
        }

        &:disabled{
            background-color: #F2F2F2;
            color: #AFAFAF;
            border: 1px solid #D5D5D5;;
        }
`

const Button = styled.button`
    height: 45px;
    margin-top: 10px;

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

const Cadastro = styled.p`
    color: #FF4791;
    font-size: 14px;
    margin-top: 25px;

    text-decoration-line: underline;
`
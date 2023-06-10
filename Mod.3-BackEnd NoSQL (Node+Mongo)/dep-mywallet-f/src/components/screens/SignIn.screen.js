import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import UserContext from "../contexts/user.context";

function SignInScreen() {
    const navigate = useNavigate();

    const { setLoggedUser } = useContext(UserContext);
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [disabled, setDisabled] = useState(false);

    function clearInputs() {
        setUser({
            email: "",
            password: "",
        });
    }

    function submitForm(e) {
        e.preventDefault();

        setDisabled(true);

        axios
            .post("http://localhost:5000/sign-in", user)
            .then((ans) => {
                window.localStorage.setItem("user", JSON.stringify(ans.data));
                setLoggedUser(ans.data);
                alert("Bem vindo " + ans.data.username);
                navigate("/home");
            })
            .catch((err) => {
                alert("Email ou senha incorretos! Tente novamente.");
                clearInputs();
                setDisabled(false);
            });
    }

    return (
        <Screen>
            <Title>MyWallet</Title>
            <Form onSubmit={submitForm}>
                <Input
                    name="email"
                    type="text"
                    placeholder="E-mail"
                    value={user.email}
                    onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                    }
                    disabled={disabled}
                    required
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Senha"
                    value={user.password}
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                    disabled={disabled}
                    required
                />
                <Button disabled={disabled}>
                    {disabled ? <BeatLoader color="#FFFFFF" /> : "Entrar"}
                </Button>
            </Form>
            <Link to="/sign-up">
                <SignUp>
                    Primeira vez? <strong>Cadastre-se</strong>
                </SignUp>
            </Link>
        </Screen>
    );
}

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Title = styled.h1`
    margin-bottom: 30px;

    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    font-weight: 400;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 326px;
    height: 58px;
    margin-bottom: 15px;
    padding-left: 15px;

    font-size: 20px;

    outline: none;

    border: none;
    border-radius: 5px;

    ::placeholder {
        font-size: 20px;
        font-weight: 400;
    }
`;

const Button = styled.button`
    width: 326px;
    height: 46px;

    font-size: 20px;
    font-weight: 46px;
    color: #ffffff;

    background-color: #a328d6;
    border: none;
    border-radius: 5px;

    cursor: pointer;
`;

const SignUp = styled.p`
    margin-top: 35px;

    strong {
        font-style: italic;
        text-decoration: underline;
    }
`;

export default SignInScreen;

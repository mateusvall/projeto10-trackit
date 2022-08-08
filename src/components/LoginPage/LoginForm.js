import axios from "axios";
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import UserContext from "../../contexts/UserContext"
import { ThreeDots } from "react-loader-spinner";

export default function LoginForm(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const {token, setToken} = useContext(UserContext);
    const {image, setImage} = useContext(UserContext);


    let navigate = useNavigate();

    function loginRequest(event){
        

        event.preventDefault();

        const userAccount = {
            email: email,
            password: senha
        };

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", userAccount);
        setLoading(true);
        request.then(response => {
            setToken(response.data.token);
            setImage(response.data.image);
            setLoading(false);
            navigate("/habitos");
        });

        request.catch(() => {
            alert("Whoops! Algo deu errado. Verifique se o login e a senha estão corretos.")
            setLoading(false);
        });

    }
   


    return(
        <LoginFormContainer loading={loading}>
            <form onSubmit={loginRequest}>
                <input disabled={loading} type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                <input disabled={loading} type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)}></input>
                <button disabled={loading} type="submit">{loading? <ThreeDots color="white"/> : "Entrar"}</button>
            </form>
            <Link to="/registro">Não tem uma conta? Cadastre-se!</Link>
        </LoginFormContainer>
    )
}

const LoginFormContainer = styled.div`
    width: 303px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 32px;

    input{
        box-sizing: border-box;
        width: 100%;
        height: 45px;
        margin-bottom: 6px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 11px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
                
    }

    input ::placeholder{
        font-size: 20px;
        line-height: 25px;

    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        border: none;
        margin-bottom: 25px;
        opacity:${props => props.loading? 0.7:1};
    }

    a{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }

`
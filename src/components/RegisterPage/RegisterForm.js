import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ThreeDots } from "react-loader-spinner";


export default function RegisterForm(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();
   

    function registerNewUser(event){

        event.preventDefault();

        const newUser = {
            email:email,
            name:nome,
            image:foto,
            password:senha
        };

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", newUser);
        setLoading(true);
        request.then(() => {
            setEmail("");
            setSenha("");
            setNome("");
            setFoto("");
            setLoading(false);
            alert("Usuário criado com sucesso!")
            navigate("/")
        });

        request.catch(() => {
            alert("Whoops! Verifique se todos os campos foram preenchidos corretamente!")
            setLoading(false);
        })

    }

    return(
        <RegisterFormContainer loading={loading}>
            <form onSubmit={registerNewUser}>
                <input disabled={loading} required type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                <input disabled={loading} required type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)}></input>
                <input disabled={loading} required type="text" placeholder="nome" value={nome} onChange={e => setNome(e.target.value)}></input>
                <input disabled={loading} required type="url" placeholder="foto" value={foto} onChange={e => setFoto(e.target.value)}></input>
                <button disabled={loading} type="submit">{loading? <ThreeDots color="white"/> : "Cadastrar"}</button>
            </form>
            <Link to="/">Já tem uma conta? Faça Login!</Link>
        </RegisterFormContainer>
    )
}

const RegisterFormContainer = styled.div`
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
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        padding-left: 11px;
                
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
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
        opacity: ${props => props.loading ? 0.7 : 1}
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
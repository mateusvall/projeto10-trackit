import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"


export default function RegisterForm(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");

   

    function registerNewUser(event){

        event.preventDefault();

        const newUser = {
            email:email,
            name:nome,
            image:foto,
            password:senha
        };

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", newUser);

        request.then(() => {
            setEmail("");
            setSenha("");
            setNome("");
            setFoto("");

            alert("Usuário criado com sucesso!")
        });

        request.catch(() => {
            alert("Whoops! Verifique se todos os campos foram preenchidos corretamente!")
        })

    }

    return(
        <RegisterFormContainer>
            <form onSubmit={registerNewUser}>
                <input required type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                <input required type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)}></input>
                <input required type="text" placeholder="nome" value={nome} onChange={e => setNome(e.target.value)}></input>
                <input required type="url" placeholder="foto" value={foto} onChange={e => setFoto(e.target.value)}></input>
                <button type="submit">Cadastrar</button>
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
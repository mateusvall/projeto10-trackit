import axios from "axios";
import { useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "../../../contexts/UserContext"
import CreationBox from "./CreationBox/CreationBox"

export default function HabitArea({creationMode, setCreationMode}){

    const {habList, setHabList} = useContext(UserContext);
    const {token, setToken} = useContext(UserContext)
    const [loading, setLoading] = useState(false);

    const config ={
        headers:{
            "Authorization":`Bearer ${token}`
        }
    }

    const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
    request.then(response => console.log(response.data))

    return(
        <HabitAreaContainer>
            <CreationBox creationMode={creationMode} setCreationMode={setCreationMode} loading={loading} setLoading={setLoading}/>
            {habList.length ? <h1>Tem hábitos</h1> : <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>}
        </HabitAreaContainer>
    )
}

const HabitAreaContainer = styled.div`
    width: 338px;
    
    h1{
        margin-top: 29px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`
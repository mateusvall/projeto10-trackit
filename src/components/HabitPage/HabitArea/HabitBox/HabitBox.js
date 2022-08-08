import axios from "axios"
import { useContext } from "react"
import styled from "styled-components"
import UserContext from "../../../../contexts/UserContext"
import remove from "../../../../images/remove.png"
import DaysButtons from "./DaysButtons./DaysButton"

export default function HabitBox({name, id, days}){

    const {token, setToken} = useContext(UserContext);
    const {habList, setHabList} = useContext(UserContext);

    function removeHabit(){
        const config ={
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }

        const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);

        request.then(() => {
            alert("Deletado com sucesso!")

            const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
            request.then(response => setHabList(response.data))
        })

    }



    return(
        <HabitBoxContainer>
            <h1>{name}</h1>
            <img src={remove} onClick={() => removeHabit()}/>
            <DaysButtons days={days}/>
        </HabitBoxContainer>
    )
}


const HabitBoxContainer = styled.div`
    position: relative;
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;

    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        position: absolute;
        left: 15px;
        top: 13px;
    }

    img{
        position:absolute;
        top: 11px;
        right: 10px;
    }
`
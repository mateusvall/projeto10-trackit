import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "../../../../contexts/UserContext"
import remove from "../../../../images/remove.png"
import DaysButtons from "./DaysButtons./DaysButton"

export default function HabitBox({name, id, days}){

    const {token, setToken} = useContext(UserContext);
    const {progress, setProgress} = useContext(UserContext);
    const [show, setShow] = useState(false);
    const {habList, setHabList} = useContext(UserContext);
    const {checkList, setCheckList} = useContext(UserContext);

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

            const req = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config);
            req.then((response) => {
                setCheckList(response.data)
                
                const habitTotal = response.data.length;
                const habitMarked = response.data.filter((item) => item.done === true).length;

                const currentProgress = habitMarked/habitTotal;
                if(currentProgress){
                    setProgress(currentProgress);
                }else{
                    setProgress(0);
                }
                
            })


        })

        setShow(false);

    }



    return(
        <HabitBoxContainer show={show}>
            <h1>{name}</h1>
            <img src={remove} onClick={() => setShow(true)}/>
            <DaysButtons days={days}/>
            <h2>Remover?</h2>
            <h3 onClick={() => removeHabit()}>Sim</h3>
            <h4 onClick={() => setShow(false)}>Não</h4>
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

    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        position: absolute;
        right: 5px;
        bottom: 40px;
        display:${props => props.show ? "inherit":"none"}
    }

    h3{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        position: absolute;
        color: red;
        bottom: 20px;
        right: 5px;
        display:${props => props.show ? "inherit":"none"}
    }

    h4{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        position: absolute;
        bottom: 20px;
        right: 40px;
        display:${props => props.show ? "inherit":"none"}
    }
`
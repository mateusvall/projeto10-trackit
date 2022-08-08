import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "../../../../contexts/UserContext"
import { ThreeDots } from "react-loader-spinner"

export default function SaveButton({loading, setLoading,segunda,terca,quarta,quinta,sexta,sabado,domingo,habitName}){

    const {token, setToken} = useContext(UserContext);

    function listDays(){
        const days = [];

       
        if(segunda){
            days.push(1);
        }
        if(terca){
            days.push(2);
        }
        if(quarta){
            days.push(3);
        }
        if(quinta){
            days.push(4);
        }
        if(sexta){
            days.push(5);
        }
        if(sabado){
            days.push(6);
        }
        if(domingo){
            days.push(7);
        }
       

        return days;
    }

    function createHabit(){
        const config ={
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }

        const newHabit = {
            name:habitName,
            days: listDays()
        }

        console.log(newHabit);

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", newHabit, config);
        setLoading(true)
        request.then(() => {
            alert("Deu bom!");
            setLoading(false);
        })
        request.catch(() => alert("Deu ruim!"))
    }



    return(
        <SaveButtonContainer onClick={() => createHabit()} loading={loading}>
            {loading? <ThreeDots color="white"/> : "Salvar"}
        </SaveButtonContainer>
    )
}

const SaveButtonContainer = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border:none;
    position:absolute;
    right: 16px;
    bottom: 15px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity:${props => props.loading ? 0.7 : 1};

`
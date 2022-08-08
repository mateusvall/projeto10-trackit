import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "../../../../contexts/UserContext"
import { ThreeDots } from "react-loader-spinner"

export default function SaveButton({loading, setLoading,segunda,setSegunda,terca,setTerca,quarta,setQuarta,quinta,setQuinta,sexta,setSexta,sabado,setSabado,domingo,setDomingo,habitName,setHabitName, creationMode, setCreationMode}){

    const {token, setToken} = useContext(UserContext);
    const {habList, setHabList} = useContext(UserContext);

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

    function resetFields(){
        setDomingo(false);
        setSegunda(false);
        setTerca(false);
        setQuarta(false);
        setQuinta(false);
        setSexta(false);
        setSabado(false);
        setHabitName("");
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
            resetFields();
            alert("Deu bom!");

            const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
            request.then(response => setHabList(response.data))

            setCreationMode(false);
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
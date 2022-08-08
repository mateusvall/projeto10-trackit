import axios from "axios";
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import UserContext from "../../../contexts/UserContext";
import CheckBox from "./CheckBox/CheckBox";

export default function CheckArea(){

    const {token, setToken} = useContext(UserContext)
    const {progress, setProgress} = useContext(UserContext);
    const [checkList, setCheckList] = useState([]);

    useEffect(() =>{
        const config ={
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }

        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config)

        request.then((response) => {
            alert("Deu bom!")
            console.log(response.data)
            setCheckList(response.data)

            const habitTotal = response.data.length;
            const habitMarked = response.data.filter((item) => item.done === true).length;

            const currentProgress = habitMarked/habitTotal;
            setProgress(currentProgress);
        })

    },[])

    return(
        <CheckAreaContainer>
            {checkList.length? checkList.map((item) => <CheckBox name={item.name} curr={item.currentSequence} high={item.highestSequence} id={item.id} done={item.done} checkList={checkList} setCheckList={setCheckList}/>) : ""}
        </CheckAreaContainer>
    )
}

const CheckAreaContainer = styled.div`
    margin-bottom: 110px;

`
import axios from "axios";
import { useContext, useState } from "react"
import styled from "styled-components"
import UserContext from "../../../../contexts/UserContext";
import check from "../../../../images/check.png"

export default function CheckButton({id, checkList, setCheckList, done, selected, setSelect}){


    const {token, setToken} = useContext(UserContext);
    const {progress, setProgress} = useContext(UserContext);

    

    function habitDone(){

        const config ={
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }

        if(!done){
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,{},config);
            request.then(() => {
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
            request.catch(() => alert("Deu ruim!"))
        }else{
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,{},config);
            request.then(() => {
                const req = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config);
                req.then((response) => {
                    setCheckList(response.data)

                    const habitTotal = response.data.length;
                    const habitMarked = response.data.filter((item) => item.done === true).length;

                    const currentProgress = habitMarked/habitTotal;
                    setProgress(currentProgress);
                })
            })
            request.catch(() => alert("Deu ruim!"))
        }
    }

    return(
        <CheckButtonContainer done={done} onClick={() => habitDone()}>
            <img src={check} />
        </CheckButtonContainer>
    )
}

const CheckButtonContainer = styled.div`    
    width: 69px;
    height: 69px;
    background: ${props => props.done? "#8FC549" : "#EBEBEB"};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    position: absolute;
    right: 13px;
    top: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
`


import dayjs from "dayjs"
import { useContext } from "react";
import styled from "styled-components"
import UserContext from "../../contexts/UserContext";


export default function TodayTitle(){
    require('dayjs/locale/pt-br');
    dayjs.locale('pt-br')
    var now = dayjs().format("dddd, DD/MM");
    

    const {progress, setProgress} = useContext(UserContext);



    return(
        <TodayTitleContainer progress={progress}>
            <h1>{now}</h1>
            <h2>{progress? `${Math.round(progress*100)}% dos hábitos concluídos`  : "Nenhum hábito concluído ainda"}</h2>
        </TodayTitleContainer>
    )
}

const TodayTitleContainer = styled.div`
    margin-top: 98px;
    margin-bottom: 28px;
    width: 340px;
    
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: ${props => props.progress? "#8FC549":"#BABABA"}

    }
`
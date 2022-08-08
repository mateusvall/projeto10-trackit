import { useState } from "react"
import styled from "styled-components"
import CheckButton from "./CheckButton"

export default function CheckBox({name, curr, high, id, done, checkList, setCheckList}){

    const [selected, setSelect] = useState(false);

    return(
        <CheckBoxContainer done={done} curr={curr} high={high}>
            <h1>{name}</h1>
            <h2>Sequência atual: {curr} dias</h2>
            <h3>Seu recorde: {high} dias</h3>
            <CheckButton id={id} checkList={checkList} setCheckList={setCheckList} done={done} selected={selected} setSelect={setSelect}/>
        </CheckBoxContainer>
    )
}

const CheckBoxContainer = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
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

    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: ${props => props.done ? "#8FC549":"#666666"};
        position: absolute;
        top: 45px;
        left: 15px;

    }

    h3{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: ${props => props.curr === props.high? "#8FC549":"#666666"};
        position: absolute;
        top: 60px;
        left: 15px;
    }

`
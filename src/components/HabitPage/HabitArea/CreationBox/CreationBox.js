import { useState } from "react"
import styled from "styled-components"
import ButtonList from "./ButtonList/ButtonList"
import SaveButton from "./SaveButton";

export default function CreationBox({creationMode, setCreationMode, loading, setLoading}){

    const [habitName, setHabitName] = useState("");
    const [segunda, setSegunda] = useState(false);
    const [terca, setTerca] = useState(false);
    const [quarta, setQuarta] = useState(false);
    const [quinta, setQuinta] = useState(false);
    const [sexta, setSexta] = useState(false);
    const [sabado, setSabado] = useState(false);
    const [domingo, setDomingo] = useState(false);



    return(
        <CreationBoxContainer available={creationMode}>
            <input disabled={loading} type="text" placeholder="nome do hábito" value={habitName} onChange={e => setHabitName(e.target.value)}></input>
            <ButtonList
                domingo={domingo}
                setDomingo={setDomingo} 
                segunda={segunda}
                setSegunda={setSegunda}
                terca={terca}
                setTerca={setTerca}
                quarta={quarta}
                setQuarta={setQuarta}
                quinta={quinta}
                setQuinta={setQuinta}
                sexta={sexta}
                setSexta={setSexta}
                sabado={sabado}
                setSabado={setSabado}
                loading={loading}     
            />
            <h1 onClick={() => setCreationMode(false)}>Cancelar</h1>
            <SaveButton 
                loading={loading} 
                setLoading={setLoading}
                domingo={domingo}
                setDomingo={setDomingo}
                segunda={segunda}
                setSegunda={setSegunda}
                terca={terca}
                setTerca={setTerca}
                quarta={quarta}
                setQuarta={setQuarta}
                quinta={quinta}
                setQuinta={setQuinta}
                sexta={sexta}
                setSexta={setSexta}
                sabado={sabado}
                setSabado={setSabado}
                habitName={habitName}
                setHabitName={setHabitName}
                creationMode={creationMode}
                setCreationMode={setCreationMode}
            />

        </CreationBoxContainer>
    )
}

const CreationBoxContainer = styled.div`

    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 29px;
    position: relative;
    display: ${props => props.available ? "inherit" : "none"};

    input{
        width: 293px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-left: 19px;
        margin-top: 18px;
        padding-left: 11px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

    }

    h1{
        position: absolute;
        bottom: 23px;
        right: 128px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;

    }

`
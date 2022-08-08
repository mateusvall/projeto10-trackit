import styled from "styled-components"
import mais from "../../images/+.png"

export default function HabitTitle({creationMode, setCreationMode}){
    return(
        <HabitTitleContainer>
            <h1>Meus Hábitos</h1>
            <button onClick={() => setCreationMode(true)}><img src={mais}/></button>
        </HabitTitleContainer>
    )
}

const HabitTitleContainer = styled.div`
    width: 338px;
    margin-top: 92px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 23px;

    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    button{
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;

    }
    

`
import styled from "styled-components"
import mais from "../../images/+.png"

export default function HabitTitle(){
    return(
        <HabitTitleContainer>
            <h1>Meus Hábitos</h1>
            <button><img src={mais}/></button>
        </HabitTitleContainer>
    )
}

const HabitTitleContainer = styled.div`
    width: 338px;
    margin: 28px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 23px;

    button{
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;

    }
    

`
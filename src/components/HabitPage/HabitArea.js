import styled from "styled-components"

export default function HabitArea(){
    return(
        <HabitAreaContainer>
            <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar o tracker!</h1>
        </HabitAreaContainer>
    )
}

const HabitAreaContainer = styled.div`
    width: 338px;
    font-size: 18px;
`
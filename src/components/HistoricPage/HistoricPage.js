import styled from "styled-components"
import BottomBar from "../HabitPage/BottomBar"
import TopBar from "../HabitPage/TopBar"
import HistoricTitle from "./HistoricTitle"

export default function HistoricPage(){
    return(
        <HistoricPageContainer>
            <TopBar/>
            <HistoricTitle/>
            <BottomBar/>
        </HistoricPageContainer>
    )
}

const HistoricPageContainer = styled.div`
    background: #F2F2F2;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
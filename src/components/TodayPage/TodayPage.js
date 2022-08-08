import styled from "styled-components"
import BottomBar from "../HabitPage/BottomBar"
import TopBar from "../HabitPage/TopBar"
import CheckArea from "./CheckArea.js/CheckArea"
import TodayTitle from "./TodayTitle"

export default function TodayPage(){


    return(
        <TodayPageContainer>
            <TopBar/>
            <TodayTitle/>
            <CheckArea/>
            <BottomBar/>
        </TodayPageContainer>
    )
}

const TodayPageContainer = styled.div`
    background: #F2F2F2;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

`
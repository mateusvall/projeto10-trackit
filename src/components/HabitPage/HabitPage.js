import React from "react";
import styled from "styled-components";
import HabitArea from "./HabitArea";
import HabitTitle from "./HabitTitle";
import TopBar from "./TopBar";

export default function HabitPage(){
    return(
        <HabitPageContainer>
            <TopBar/>
            <HabitTitle/>
            <HabitArea/>
        </HabitPageContainer>
    )
}

const HabitPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


`

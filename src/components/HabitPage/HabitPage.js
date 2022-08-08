import React, { useState } from "react";
import styled from "styled-components";
import BottomBar from "./BottomBar";
import HabitArea from "./HabitArea/HabitArea";
import HabitTitle from "./HabitTitle";
import TopBar from "./TopBar";

export default function HabitPage(){
    const [creationMode, setCreationMode] = useState(false);

    return(
        <HabitPageContainer>
            <TopBar />
            <HabitTitle creationMode={creationMode} setCreationMode={setCreationMode}/>
            <HabitArea creationMode={creationMode} setCreationMode={setCreationMode} />
            <BottomBar/>
        </HabitPageContainer>
    )
}

const HabitPageContainer = styled.div`
    background: #F2F2F2;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 111px;


`

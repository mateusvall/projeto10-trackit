import React, { useState } from "react";
import styled from "styled-components";
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
        </HabitPageContainer>
    )
}

const HabitPageContainer = styled.div`
    background: #F2F2F2;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;


`

import { Link } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbar } from "react-circular-progressbar"

export default function BottomBar(){

    return(
        <BottomBarContainer>
            <Link to="/habitos">Hábitos</Link>
            <Link to="/hoje">Hoje</Link>
            <Link to="/historico">Histórico</Link>

        </BottomBarContainer>
    )
}

const BottomBarContainer = styled.div`
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    left: 0px;
    bottom: 0px;

`
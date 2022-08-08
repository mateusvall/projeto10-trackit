import { Link } from "react-router-dom"
import styled from "styled-components"
import circ from "../../images/circ.png"
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

    a{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
        text-decoration: none;
    }

`
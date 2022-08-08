import styled from "styled-components"
import UserContext from "../../contexts/UserContext"
import { useContext } from "react"

export default function TopBar(){

    const {image, setImage} = useContext(UserContext);

    return(
        <TopBarContainer>
            <h1>TrackIt</h1>
            <img src={image}/>
        </TopBarContainer>
    )
}

const TopBarContainer = styled.div`
    position: fixed;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    h1{
        font-family: 'Playball';
        margin: 10px 18px;
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }

    img{
        margin: 10px 18px;
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }

`
import styled from "styled-components"

export default function TerButton({tercaOn}){
    return(
        <DayContainer tercaOn={tercaOn}>
            T
        </DayContainer>
    )
}

const DayContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: ${props => props.tercaOn? "#CFCFCF":"#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 4px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.tercaOn? "#FFFFFF" :"#CFCFCF"};
`
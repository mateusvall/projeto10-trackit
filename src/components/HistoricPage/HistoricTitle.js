import styled from "styled-components"

export default function HistoricTitle(){
    return(
        <HistoricTitleContainer>
            <h1>Histórico</h1>
            <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
        </HistoricTitleContainer>
    )
}

const HistoricTitleContainer = styled.div`
    margin-top: 98px;
    width: 340px;

    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    h2{
        margin-top: 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }


`

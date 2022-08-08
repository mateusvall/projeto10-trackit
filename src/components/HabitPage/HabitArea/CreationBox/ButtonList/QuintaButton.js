import styled from "styled-components"

export default function QuintaButton({quinta, setQuinta, loading}){
    console.log(quinta)
    return(
        <WeekButton disabled={loading} selected={quinta} onClick={() => setQuinta(!quinta)}>
            Q
        </WeekButton>
    )
}

const WeekButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: ${props => props.selected? "#CFCFCF":"#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.selected? "#FFFFFF" :"#CFCFCF"};

    margin-right: 4px;
`
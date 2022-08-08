import styled from "styled-components"
import logo from "../../images/TrackIt.png"
import RegisterForm from "./RegisterForm"

export default function RegisterPage(){
    return(
        <RegisterPageContainer>
            <img src={logo}/>
            <RegisterForm/>
        </RegisterPageContainer>
    )
}

const RegisterPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
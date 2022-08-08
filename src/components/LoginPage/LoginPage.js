import styled from "styled-components"
import logo from "../../images/TrackIt.png"
import LoginForm from "./LoginForm"

export default function LoginPage(){
    return(
        <LoginPageContainer>
            <img src={logo}/>
           <LoginForm/>
        </LoginPageContainer>
    )
}

const LoginPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    input ::placeholder{
        font-size: 30px;
    }

`
import styled from "styled-components"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { useContext } from "react"
import UserContext from "../../contexts/UserContext"

export default function CircBar(){


    const {progress, setProgress} = useContext(UserContext)

    return(
        <CircBarContainer>
             <CircularProgressbar
                    text={"Hoje"}
                    value={progress}
                    maxValue={1}
                    background={true}
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor:"#52B6FF",
                        textColor:'#FFFFFF',
                        trailColor:'#52B6FF',
                        pathColor:'#FFFFFF',
                    })}
                />
        </CircBarContainer>
    )
}

const CircBarContainer = styled.div`
    margin-bottom: 30px;
    width: 91px;
    height: 91px;
`
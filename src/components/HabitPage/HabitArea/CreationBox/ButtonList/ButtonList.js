import styled from "styled-components"
import DomingoButton from "./DomingoButton"
import SegundaButton from "./SegundaButton"
import TercaButton from "./TercaButton"
import QuartaButton from "./QuartaButton"
import QuintaButton from "./QuintaButton"
import SextaButton from "./SextaButton"
import SabadoButton from "./SabadoButton"

export default function ButtonList(props){
    console.log(props)
    return(
        <ButtonListContainer>
            <DomingoButton domingo={props.domingo} setDomingo={props.setDomingo} loading={props.loading}/>
            <SegundaButton segunda={props.segunda} setSegunda={props.setSegunda} loading={props.loading}/>
            <TercaButton terca={props.terca} setTerca={props.setTerca} loading={props.loading}/>
            <QuartaButton quarta={props.quarta} setQuarta={props.setQuarta} loading={props.loading}/>
            <QuintaButton quinta={props.quinta} setQuinta={props.setQuinta} loading={props.loading}/>
            <SextaButton sexta={props.sexta} setSexta={props.setSexta} loading={props.loading}/>
            <SabadoButton sabado={props.sabado} setSabado={props.setSabado} loading={props.loading}/>
        </ButtonListContainer>
    )
}

const ButtonListContainer = styled.div`
    display: flex;
    margin-left: 19px;
    margin-top: 8px;
`


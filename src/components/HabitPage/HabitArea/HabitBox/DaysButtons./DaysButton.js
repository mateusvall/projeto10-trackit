import styled from "styled-components"
import DomButton from "./DomButton"
import SegButton from "./SegButton"
import TerButton from "./TerButton"
import QuaButton from "./QuaButton"
import QuiButton from "./QuiButton"
import SexButton from "./SexButtton"
import SabButton from "./SabButton"

export default function DaysButtons({days}){
    
    const segundaOn = !!(days.filter((item) => item == 1).length);
    const tercaOn = !!(days.filter((item) => item == 2).length);
    const quartaOn = !!(days.filter((item) => item == 3).length);
    const quintaOn = !!(days.filter((item) => item == 4).length);
    const sextaOn = !!(days.filter((item) => item == 5).length);
    const sabadoOn = !!(days.filter((item) => item == 6).length);
    const domingoOn = !!(days.filter((item) => item == 7).length);
    



    return(
        <DaysButtonsContainer>
            <DomButton domingoOn={domingoOn}/>
            <SegButton segundaOn={segundaOn}/>
            <TerButton tercaOn={tercaOn}/>
            <QuaButton quartaOn={quartaOn}/>
            <QuiButton quintaOn={quintaOn}/>
            <SexButton sextaOn={sextaOn}/>
            <SabButton sabadoOn={sabadoOn}/>
        </DaysButtonsContainer>
    )
}

const DaysButtonsContainer = styled.div`
   position: absolute;
   left: 14px;
   bottom: 15px;
   display: flex;

`
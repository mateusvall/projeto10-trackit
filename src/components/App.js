import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Reset from "../styles/reset";
import GlobalStyle from "../styles/globalStyles";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import HabitPage from "./HabitPage/HabitPage";
import TodayPage from "./TodayPage/TodayPage";
import HistoricPage from "./HistoricPage/HistoricPage";


export default function App(){

    const [token, setToken] = useState("");
    const [image, setImage] = useState("")
    const [habList, setHabList] = useState([])
    const [progress, setProgress] = useState(0);

    return(
        <React.Fragment>
        <UserContext.Provider value={{token,setToken, image, setImage, habList, setHabList, progress, setProgress}}>
        <Reset/>
        <GlobalStyle/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/registro" element={<RegisterPage />}/>
                <Route path="/habitos" element={<HabitPage />}/>
                <Route path="/hoje" element={<TodayPage />}/>
                <Route path="/historico" element={<HistoricPage/>}/>
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
        </React.Fragment>

            
    );
}




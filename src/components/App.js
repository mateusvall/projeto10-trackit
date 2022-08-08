import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Reset from "../styles/reset";
import GlobalStyle from "../styles/globalStyles";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import HabitPage from "./HabitPage/HabitPage";


export default function App(){

    const [token, setToken] = useState("");
    const [image, setImage] = useState("")

    return(
        <React.Fragment>
        <UserContext.Provider value={{token,setToken, image, setImage}}>
        <Reset/>
        <GlobalStyle/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/registro" element={<RegisterPage />}/>
                <Route path="/habitos" element={<HabitPage />}/>
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
        </React.Fragment>

            
    );
}




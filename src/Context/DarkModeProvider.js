import { useState, createContext } from 'react';
import React from "react";

export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }){
    const [Darkmode, setDarkmode] = useState(false);

    function toggleDarkMode(){
        setDarkmode(!Darkmode);
    }

    return(
        <DarkModeContext.Provider value={{ Darkmode, toggleDarkMode }}>
            <h2>{`State ${Darkmode}`}</h2>
            {children}
        </DarkModeContext.Provider>
    )
}
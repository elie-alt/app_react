import { useContext } from "react"
import { DarkModeContext } from './DarkModeProvider'

export default function ChangeModeButton(){
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
    return <button onClick={toggleDarkMode} >DarkMode</button>
}
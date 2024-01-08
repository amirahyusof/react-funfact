import React from "react";
import Navbar from './Navbar';
import Main from './Main';
import Footer from "./Footer";

function App(){
    const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode)
    }

    return(
        <div className="content">
            <Navbar 
            darkMode = {darkMode}
            toggleMode = {toggleDarkMode}/>
            <Main darkMode={darkMode} />
            <Footer darkMode={darkMode} />
        </div>
    )
}

export default App

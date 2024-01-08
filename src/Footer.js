import React from "react";

function Footer(props){
    return(
        <footer className={props.darkMode? "dark": ""}>
            <p>Code with love by Amirah</p>
        </footer>
    )
}

export default Footer
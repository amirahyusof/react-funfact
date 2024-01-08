import React from "react";

function Navbar(props){
  return(
    <nav className={props.darkMode? "dark": ""}>
        <img src={process.env.PUBLIC_URL + "/images/react-logo-nav.png"} 
        alt="react-logo" className="nav--logo" />
        <h2 className="nav--logo_text">ReactFacts</h2>
        <div className="toggler">
          <p className="toggler--light">Light</p>
          <div className="toggler--slider" onClick={props.toggleMode}>
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Dark</p>
        </div>
    </nav>
    
  )
}


export default Navbar

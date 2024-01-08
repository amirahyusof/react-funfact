import React from "react";

function Main(props){
    return(
        <main className={props.darkMode? "dark" : ""}>
            <h1 className="content--title">Fun facts about React</h1>
            <ul className="content--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousand of enterprise apps, including mobile apps</li>
            </ul>
        </main>
       
    )
  }

export default Main
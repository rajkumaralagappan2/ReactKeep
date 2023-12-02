import React from "react";

function Footer(){
    const year= new Date().getFullYear();
    return(
        <footer> © {year} Copyrights Reserved by Rajkumar A</footer>
    )
}

export default Footer
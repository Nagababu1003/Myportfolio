import React from 'react'
import "../css/header.css"
function header(){
    return(
        <header id="head">
            <div class="logo">
                <span>&#8712; Nagababu</span>
            </div>
            <div class="nav-bar">
                <nav>
                    <ul>
                        <li><a class="active" href="#home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#edu">Education</a></li>
                        <li><a href="#exp">Experience</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default header;
import React from "react";
import favicon from "../res/favicon.png";
import "../css/home.css";



function Home()
{
    return(
            <>
            <section id="home" class="container">
                <div class="info">
                    <h1>Hi There,<br/>I'm Bejawada <span class="name">Nagababu</span></h1>
                    <p>I Am A Fresher<span>&nbsp; Java Developer</span></p><br/>
                    <div class="but">
                        <a href="#About">About Me</a>
                    </div>

                </div>
                <div>
                    <img src={favicon} alt="none"/>
                </div>
            </section>
            </>
    );

}

export default Home;
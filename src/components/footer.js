import React from "react";
import "../css/footer.css";

function footer(){
    return(
        <>
        <section id="footer">
            <div class="content">
                <h2 class="foot">Bejawada</h2>
                <h2 class="foot">Nagababu</h2>
            </div>
            <div class="two">
                <span class="foo">Quick Links</span>
                <ul>
                    <li><a href="#head">Home</a></li>
                    <li><a href="#About">About</a></li><br/>
                    <li><a href="#edu">Education</a></li>
                    <li><a href="#exp">Experience</a></li><br/>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#project">Projects</a></li><br/>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div class="three">
                <h1 class="foo">Contact Info</h1>
                <ul class="foo1">
                    <li>+91 9347-567-292</li><br/>
                    <li>bnaga0245@gmail.com</li><br/>
                    <li>Hyderabad, Telangana - 500055</li>
                </ul>
            </div>
        </section>
        <div class="copy"> &#169; COPYRIGHT  @Bejawada Nagababu </div>
        </>
    );
}

export default footer;
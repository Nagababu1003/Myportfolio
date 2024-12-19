import React from "react";
import "../css/contact.css"
import con from "../res/image.png"

function contact() {
    return (
        <section id="contact">
            <br/>
            <br />
            <h2 class="option7">Contact Me</h2>
            <div class="cont">
                <div>
                    <img class="con" src={con} alt="none"></img>
                </div>
                <div>
                    <form>
                        <input type="text" placeholder="Name.." />
                        <input type="text" placeholder="Email.." />
                        <input type="text" placeholder="Mobile Number.." />
                        <input type="text" placeholder="Message.." />
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default contact;
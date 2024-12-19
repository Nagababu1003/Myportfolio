import React from "react";
import Exp from "./exp";
import "../css/experience.css"

function experience(){
    return(
        <section id="exp">
            <br/>
            <br />
            <h1 class="option2">Experience</h1>
            <br/>
            <Exp course="Python Developer" name="Next24Tech Technologies" duration="March 2024 - May 2024" intern="Internship & certification"/>
            <Exp course="UI/UX Designer" name="Internship Studio" duration="July 2024 - Aug 2024"  intern="Internship & certification"/>
            <Exp course="Web Developemnt" name="Prasunet Company" duration="July 2024 - Aug 2024"  intern="Internship & certification"/>
            <Exp course="Java Developer" name="Naresh i Technologies" duration="June 2024 - Present" intern="Training & certification"/>
            <Exp course="UI/UX Designer" name="CodSoft" duration="Dec 2024 - Present"  intern="Internship & certification"/>
            <Exp course="Web Developemnt" name="CodSoft" duration="Dec 2024 - Present"  intern="Internship & certification"/>
        </section>
    );
}

export default experience;
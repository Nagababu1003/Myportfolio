import React from "react";
import "../css/edu.css"

function edu(){
    return(
        <div>
            <br />
            <br />
            <h1 class="option1">Education</h1>
        <div class="study">
            <div id="btech">
                
            </div>
            <div class="details">
                <h3 class="course">Bachelor of Technology</h3>
                <h5 class="names">Hyderabad Institute of Technology and Management</h5>
                <h4 class="year">2021 - 2024 | Graduated </h4>
                <p  class="gpa">6.88 GPA</p>
            </div>
        </div>
        <div class="study">
            <div id="trr">
                
            </div>
            <div class="details">
                <h3 class="course">Diploma</h3>
                <h5 class="names">TRR College of Technology</h5>
                <h4 class="year">2018-2021 | Completed</h4>
                <p  class="gpa">8.98 GPA</p>
            </div>
        </div>
        <div class="study">
            <div id="srmhs">
                
            </div>
            <div class="details">
                <h3 class="course">SSC</h3>
                <h5 class="names">Sree Ramavat Model High School</h5>
                <h4 class="year">2017 - 2018 | Completed</h4>
                <p class="gpa">9.3/10</p>
            </div>
        </div>
    </div>
    );
}

export default edu;
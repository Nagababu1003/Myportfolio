import React from "react";
import "../css/exp.css";

function exp(props){
    return(
        <div class="exp">
            <div class="expert">
                <h1 class="cour">{props.course}</h1>
                <h3 class="insti">{props.name}</h3>
                <h5 class="dura">{props.duration}</h5>
                <span class="intern">{props.intern}</span>
            </div>
        </div>
    );
}

export default exp;
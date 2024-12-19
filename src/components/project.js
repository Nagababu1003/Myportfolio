import React from "react";
import vva from "../res/VVA1.png"
import Epilot from "../res/epilots.png"
import personal from "../res/Personal.png"
import Food from "../res/Food.png"
import Portfolio from "../res/Portfolio.png"
import calculator from "../res/Calculator.png"
import "../css/project.css"

function project(props){
    return(
        <section id="project">
            <br/><br />
            <h1 class="option5">Projects</h1>
            <div class="box-container">
                <div class="card">
                    <div class="card-header">
                        <img class="vva" src={vva} alt="none"></img>
                    </div>
                    <div class="card-body">
                    <h6 class="proj">Virtual Voice Assistant </h6>
                    </div>
                    <div class="card-footer">
                        <a href>View</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <img class="vva" src={Epilot} alt="none"></img>
                    </div>
                    <div class="card-body">
                    <h6 class="proj">E-pilots System </h6>
                    </div>
                    <div class="card-footer">
                        <a href>View</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <img class="vva" src={Food} alt="none"></img>
                    </div>
                    <div class="card-body">
                    <h6 class="proj">Food App Design</h6>
                    </div>
                    <div class="card-footer">
                        <a href>View</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <img class="vva" src={Portfolio} alt="none"></img>
                    </div>
                    <div class="card-body">
                    <h6 class="proj">Portfolio Website Design </h6>
                    </div>
                    <div class="card-footer">
                        <a href>View</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <img class="vva" src={calculator} alt="none"></img>
                    </div>
                    <div class="card-body">
                    <h6 class="proj">SImple Calculator </h6>
                    </div>
                    <div class="card-footer">
                        <a href>View</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <img class="vva" src={personal} alt="none"></img>
                    </div>
                    <div class="card-body">
                    <h6 class="proj">Personal Portfolio</h6>
                    </div>
                    <div class="card-footer">
                        <a href>View</a>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default project; 
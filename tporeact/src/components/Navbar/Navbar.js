import React, { Component } from "react";
import './Navbar.css';
import logo from "../../assets/img/logolega.png"



export default class Navbar extends Component{
    render(){
        return(
            <div>
                <img src={ logo } width={ 30 } alt="img" ></img>


            </div>            
        );
    }
}
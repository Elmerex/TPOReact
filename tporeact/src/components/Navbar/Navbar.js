import React, { Component } from "react";
import './Navbar.css';
import logo from "../../assets/img/logolega.png"



export default class Navbar extends Component{
    render(){
        return(
            <div>
                <image src={ logo } width={ 30 }></image>


            </div>            
        );
    }
}
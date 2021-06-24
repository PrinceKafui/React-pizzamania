import React from "react"

function Navbar() {
    return (

        <
        nav className = "navbar navbar-default navbar-me" >
        <
        div className = "container-fluid" >
        <
        div className = "navbar-header" >


        <
        a className = "navbar-brand"
        href = "#" > PizzaMania < /a>  <
        /div>

        <
        div className = "collapse navbar-collapse"
        id = "bs-example-navbar-collapse-1" >

        <
        ul className = "nav navbar-nav navbar-right" >
        <
        li > < a href = "#" > Home < /a></li >
        <
        li > < a href = "#" > About Pizza < /a></li >
        <
        li > < a href = "#" > Pizza Types < /a></li >

        <
        /ul> <
        /div>

        <
        /div>

        <
        /nav>


    );
}

export default Navbar;
import React from "react";
import {NavLink} from "react-router-dom";
const Menu = ()=>{
    return(
        <>
        <NavLink exact activeClassName="active_class" to="/">About Us</NavLink>
        <NavLink exact activeClassName="active_class" to="/">Contact Us</NavLink>
        <br/>
        <a href ="/">AboutUS</a>
        <a href="/Contact">ContactUs</a>
        </>
    )

}
export default Menu;


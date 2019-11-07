import React, { Component } from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'


const Header = (props) => {
    
    return <header className={s.header}>
<img src='https://images.ua.prom.st/343465038_w640_h640_a2.jpg' />
<div className={s.loginBlock}>
{props.isAuth ? <div>{props.login} - <button onClick={props.logout} >Log out</button> </div>
: <NavLink to={'/login'}>Login</NavLink>}


</div>
    </header>
}
export default Header;

import React, { Component } from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialog' activeClassName={s.activeLink}>Message</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/newsss' activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/sittings' activeClassName={s.activeLink}>Settings</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
        </div>
    </nav>
}

export default Navbar;
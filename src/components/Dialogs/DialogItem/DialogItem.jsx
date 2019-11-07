import React, { Component } from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = '/dialog/' + props.id
    return (

        <div className={s.dialog + ' ' + s.active}>
<img src={props.avatar} alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
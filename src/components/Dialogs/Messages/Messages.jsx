import React, { Component } from 'react';
import s from './../Dialogs.module.css';

const Messages = (props) => {

    



    return (
        <div className={s.messages}>
           
            <div className={s.message}>{props.message}</div>
        </div>
    )
}


export default Messages;
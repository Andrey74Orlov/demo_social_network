
import React, { Component } from 'react';
import s from './Post.module.css'
const Post = (props) => {
    return (   
           
    <div className={s.item}>
    <img src='http://w-hatsapp.ru/wp-content/uploads/2017/05/7-4.png' />  
        {props.message}
        <div>
            <span>like {props.like}</span>
        </div>
            </div>       
    )
}
export default Post;
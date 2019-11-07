import React from 'react'
import userPhoto from './../../assets/images/user.png';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { usersAPI } from '../../api/api';
import Paginator from '../common/Poginator/Paginator';

let User = ({follow, unfollow, user, followingInProgress, ...props}) => {
let u = user


    return (
    <div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                </NavLink>
            </div>
            <div>
                {u.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)

                    }}>Unfollow</button> :

                    <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)

                    }}>Follow</button>}

            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>

            </span>
        </span>
    </div>
    )
}


export default User;
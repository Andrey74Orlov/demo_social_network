import React from 'react'
import userPhoto from './../../assets/images/user.png';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { usersAPI } from '../../api/api';
import Paginator from '../common/Poginator/Paginator';
import User from './User';

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChange, ...props }) => {



    return <div>
        <Paginator currentPage={currentPage} onPageChange={onPageChange}
            totalUsersCount={totalUsersCount} pageSize={pageSize} />
            <div>
                {
            props.users.map(u => <User key={u.id} user={u}  follow={props.follow}
                 followingInProgress={props.followingInProgress} unfollow={props.unfollow}
                 />
            )
        }
        </div>
    </div>    
};

export default Users;
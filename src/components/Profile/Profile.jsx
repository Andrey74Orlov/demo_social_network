import React, { Component } from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {savePhoto} from "../../redux/reducerprofile";



const Profile = (props) => {

    return <div>
        <ProfileInfo profile={props.profile}
                     savePhoto={props.savePhoto}
                     isOwner={props.isOwner}
                     status={props.status}
                     updateStatus={props.updateStatus}
                     saveProfile={props.saveProfile}
        />
        <MyPostsContainer />
    </div>
}
export default Profile;
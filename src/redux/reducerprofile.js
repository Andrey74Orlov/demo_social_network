import { usersAPI, profileAPI } from "../api/api";
import { async } from "q";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {


    postData: [
        { id: 1, message: 'Hi, how are you?', like: '12' },
        { id: 2, message: "It's my first post", like: '40' },

    ],
    profile: undefined,
    status: ""
};


const reducerProfile = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                like: 11
            };
            return { ...state, postData: [...state.postData, newPost], newPostText: '' }

        };
        case SET_STATUS: {
            return { ...state, status: action.status }

        };
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }
};

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));

};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));

};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export default reducerProfile;



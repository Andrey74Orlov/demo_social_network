import { usersAPI } from "../api/api";
import { async } from "q";
import {updateObjectInArray} from '../utilits/object-hellpers'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING ';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



let initialState = {

    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};


const reducerUsers = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state, 
                users: updateObjectInArray(state.users, action.usersId, "id", {followed: true} )
                // users: state.users.map(u => {
                //     if (u.id === action.usersId) {
                //         return { ...u, followed: true }
                //     }
                //     return u
                // })
            };
        case UNFOLLOW:
            return {
                ...state,
                // users: state.users.map(u => {
                //     if (u.id === action.usersId) {
                //         return { ...u, followed: false }
                //     }
                //     return u
                // })
                users: updateObjectInArray(state.users, action.usersId, 'id', {followed: false} )
            };

        case SET_USERS:
            return { ...state, users: action.users };

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };

        case SET_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.count };

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };

        default:
            return state;
    }
};
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const followSuccess = (usersId) => ({ type: FOLLOW, usersId });
export const unfollowSuccess = (usersId) => ({ type: UNFOLLOW, usersId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_COUNT, count });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageSize) => {

    return async (dispatch) => {

        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    };
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)

    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {

    return async (dispatch) => { 
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
};
export const unfollow = (userId) => {

    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
};

export default reducerUsers;



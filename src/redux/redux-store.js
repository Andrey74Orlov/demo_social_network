import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import reducerProfile from './reducerprofile';
import reducerDialogs from './reducerdialogs';
import reducerNavbar from './reducernavbar';
import reducerUsers from './reducerusers';
import reducerAuth from './reducer -auth';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReduser} from 'redux-form'
import reducerApp from './reducer -app';

let reducers = combineReducers({
    profilePage: reducerProfile,
    dialogPage: reducerDialogs,
    navbarPage: reducerNavbar,
    usersPage: reducerUsers,
    auth: reducerAuth,
    form: formReduser,
    app: reducerApp
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)))



window.__store__ = store;
export default store;
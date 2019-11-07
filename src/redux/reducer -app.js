import { getAuthUserData } from "./reducer -auth";
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'




let initialState = {
initialized: false,
};


const reducerApp = (state = initialState, action) => {

    switch (action.type) {

        case INITIALIZED_SUCCESS:
        
            return {
                ...state,
            initialized: true      
            }        

        default:
            return state;
    }
};

export const initializedSaccess =() => ({ type: INITIALIZED_SUCCESS});
export const initializeApp = () => (dispatch) => {
   let promise = dispatch(getAuthUserData())
   promise.then(() => {
    dispatch(initializedSaccess())
   })
 
}


export default reducerApp;



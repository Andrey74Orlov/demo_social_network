const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
    dialogData: [
        { id: 1, name: 'Andrey', src: 'https://cdn.fishki.net/upload/post/2017/03/19/2245758/tn/02-funny-cat-wallpapercat-wallpaper.jpg' },
        { id: 2, name: 'Sany', src: 'https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg' },
        { id: 3, name: 'Kosty', src: 'http://komotoz.ru/kartinki/images/kartinki_pro_lubov/kartinki_pro_lubov_17.jpg' },
        { id: 4, name: 'Serega', src: 'https://avatars.mds.yandex.net/get-pdb/931085/2dd1567c-6e30-47a2-b0ed-370b11a6fd54/s375' },
    ],
    dialogMessage: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Ok' },
    ],
   
};

const reducerDialogs = (state = initialState, action) => {

    switch (action.type) {    


        case ADD_MESSAGE:
let body = action.newMessageText
            return {
                ...state,

                dialogMessage: [...state.dialogMessage,  { id: 6, message: body }],
                newMessageText: ''

            }
        default:
            return state;
    };
}
export const addMessagesActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText })


export default reducerDialogs;
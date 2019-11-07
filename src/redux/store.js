import reducerDialogs from "./reducerdialogs";
import reducerProfile from "./reducerprofile";
import reducerNavbar from "./reducernavbar";



let store = {
    _state: {
        profilePage: {

            postData: [
                { id: 1, message: 'Hi, haw are you?', like: '12' },
                { id: 2, message: "It's my first post", like: '40' },

            ],
            newPostText: 'All is well'
        },
        dialogPage: {
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
            newMessageText: 'Yes'
        },
        navbarPage: {

        },

    },
    _callSubscriber() {
        console.log('ss');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },



    dispatch(action) {
        this._state.dialogPage = reducerDialogs(this._state.dialogPage, action);
        this._state.profilePage = reducerProfile(this._state.profilePage, action);
        this._state.navbarPage = reducerNavbar(this._state.navbarPage, action);
        this._callSubscriber(this._state);
    }
}



export default store
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const store = {
    _state: {
        dialogsPage: {
            dialogs: [
                { name: "Askhat", id: 1 },
                { name: "Mako", id: 2 },
                { name: "Mano", id: 3 },
                { name: "Bekzat", id: 4 },
            ],
            messages: [
                { message: "hello" },
                { message: "Hi" },
                { message: "How are you Askhat" },
            ],
            sendMessageValue: 'Hello how are you'
        },
        profilePage: {
            posts: [
                {
                    postName: 'Hello World', desc: 'Hello world this is my first post guyyyyss',
                    img: 'https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg', like: 3
                },
                {
                    postName: 'YEEEEE BROOO im a born', desc: 'This is my second post and this social network in the best in world YEEEEEEEEEEEEE!!!!',
                    img: 'https://i.pinimg.com/736x/3a/9d/0f/3a9d0f6e815b35f98129793d89a997f3.jpg', like: 14
                }
            ],
            addPostValueInput: 'Hello askhat',
        },
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("Store changed")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}
window.store = store;

export default store;
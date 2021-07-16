import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 28},
                {id: 2, message: 'Today is saturday', likesCount: 15}
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi, how are you?'},
                {id: 2, message: 'What are you doing?'},
                {id: 3, message: 'Whats up!'},
                {id: 4, message: 'Whats up!'},
                {id: 5, message: 'Whats up!'}
            ],
            dialogs: [
                {id: 1, name: 'Serhii'},
                {id: 2, name: 'Anna'},
                {id: 3, name: 'Anastasia'},
                {id: 4, name: 'Dmitriy'},
                {id: 5, name: 'Valeriy'}
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);

    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
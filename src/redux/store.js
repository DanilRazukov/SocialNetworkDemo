import profileReducer from "./propfile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";

let store = {
    _state : {
        profilePage: {
            posts:[
                {message:"Привет, как дела?" ,likesCount: "Количество лайков: 10"},
                {message: "Первый пост готов!!!", likesCount: "Количество лайков: 15"}
            ],
            newPostText:[""]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name:"Кирилл"},
                {id: 2, name:"Ксения"},
                {id: 3, name:"Андрей"},
                {id: 4, name:"Евгений"}
            ],
            messages:[
                {id: 1, message:"Привет!"},
                {id: 2, message:"Как дела?"},
                {id: 3, message:"Привет!"},
                {id: 4, message:"Как проходит подготовка проекта?"}
            ],
            newMessageBody: ""
        },
        friendsPage: {
            friends:[
                {name:"Ксения"},
                {name:"Андрей"},
                {name:"Кирилл"}
            ]
        }
    },
    _callsubscriber () {
        console.log ("State changed");
    },
    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callsubscriber = observer;
},
    dispatch: function (action) {
        this._state.profilePage=profileReducer(this._state.profilePage, action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action)
        this._state.friendsPage=friendsReducer(this._state.friendsPage, action)
        this._callsubscriber(this._state)
    }
}


export default store;
window.store=store;
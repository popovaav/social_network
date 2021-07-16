const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
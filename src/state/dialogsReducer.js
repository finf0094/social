const initialState = {
        dialogs: [
            {name: "Askhat", id: 1},
            {name: "Mako", id: 2},
            {name: "Mano", id: 3},
            {name: "Bekzat", id: 4},
        ],
        messages: [
            {message: "hello"},
            {message: "Hi"},
            {message: "How are you Askhat"},
        ],
        sendMessageValue: 'Hello how are you'
}

const dialogsReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE-MESSAGE-INPUT') {
        state.sendMessageValue = action.text;
    } else if (action.type === 'SEND-MESSAGE') {
        state.messages.push({
            message: state.sendMessageValue
        })
        state.sendMessageValue = ''
    }
    return state;
}

export const updateMessageInputActionCreator = (text) => {
    return {type: "UPDATE-MESSAGE-INPUT", text: text}
}
export const sendMessageActionCreator = () => ({type: "SEND-MESSAGE"})

export default dialogsReducer;
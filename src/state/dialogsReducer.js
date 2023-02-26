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
        const stateCopy = {...state}
        stateCopy.sendMessageValue = action.text;
        return stateCopy;
    } else if (action.type === 'SEND-MESSAGE') {
        const newMessage = {
            message: state.sendMessageValue
        }
        const stateCopy = {...state}
        stateCopy.messages = [...stateCopy.messages, newMessage]
        stateCopy.sendMessageValue = ''
        if (state.sendMessageValue === '') {
            return state
        } else {
            return stateCopy;
        }
    }
    return state;
}

export const updateMessageInputActionCreator = (text) => {
    return {type: "UPDATE-MESSAGE-INPUT", text: text}
}
export const sendMessageActionCreator = () => ({type: "SEND-MESSAGE"})

export default dialogsReducer;
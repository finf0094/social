const dialogsReducer = (state, action) => {
    if (action.type === 'UPDATE-MESSAGE-INPUT') {
        state.sendMessageValue = action.text;
    } else if (action.type === 'SEND-MESSAGE') {
        state.messages.push({
            message: state.sendMessageValue
        })
        state.sendMessageValue = ''
    }
}

export const updateMessageInputActionCreator = (text) => {
    return {type: "UPDATE-MESSAGE-INPUT", text: text}
}
export const sendMessageActionCreator = () => ({type: "SEND-MESSAGE"})

export default dialogsReducer;
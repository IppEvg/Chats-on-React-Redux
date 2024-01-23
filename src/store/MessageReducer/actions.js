export const addChat = (chat) => {
    return { type: 'ADD_CHAT', payload: chat }
}
export const delChat = (id) => {
    return { type: 'DEL_CHAT', payload: id }
}
export const addMessage = (id, newObj) => {
    return { type: 'ADD_MESSAGE', payload: { id, newObj } }
}
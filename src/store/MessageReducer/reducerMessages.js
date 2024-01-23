const defaultState = { chats: [] }
export const reducerMessages = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CHAT":
            const newChats = { ...state, chats: [...state.chats, action.payload] }
            return newChats
        case "DEL_CHAT":
            let chatIdx = state.chats.findIndex(e => e.id === action.payload)
            state.chats.splice(chatIdx, 1)
            return { ...state, chats: [...state.chats] }
        case "ADD_MESSAGE":
            const chatIndex = state.chats.findIndex(e => e.id === action.payload.id)
            state.chats[chatIndex].messages.push(action.payload.newObj)
            const newMes = { ...state, chats: [...state.chats,] }
            return newMes
        default: return state
    }
} 
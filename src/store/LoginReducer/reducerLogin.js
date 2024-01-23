import * as types from "./types"


const defaultState = {
    cash: "",
    visible: false,
}

export const reducerLogin = (state = defaultState, action) => {
    switch (action.type) {
        case types.addCash:
            return { ...state, cash: Number(state.cash) + Number(action.payload) }
        case types.changeChecked:
            return { ...state, visible: !state.visible }
        default: return state
    }
}
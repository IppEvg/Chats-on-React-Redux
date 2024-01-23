import * as types from "./types"

export const changeChecked = () => ({ type: types.changeChecked })
export const addCash = (add) => {
    return { type: types.addCash, payload: add }
}
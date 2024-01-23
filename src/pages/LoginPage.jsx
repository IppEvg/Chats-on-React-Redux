import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../store/LoginReducer/actions"

export function LoginPage() {
    const [add, setAdd] = useState("")
    const cash = useSelector(state => state.reducerLogin.cash)
    const visible = useSelector(state => state.reducerLogin.visible)
    const dispatch = useDispatch()
    function redactAddCash(e) {
        return setAdd(e.target.value)
    }
    function adder(e) {
        e.preventDefault()
        dispatch(actions.addCash(add))
        setAdd("")
        e.target.children[1].focus()
    }

    return (<div>
        <form onSubmit={adder}>
            <p>{cash}</p>
            <input type="number" value={add} onChange={redactAddCash} />
            <button className="wrapButton" type="submit" > AddCash </button>
        </form>
        <div>
            <input type="checkbox" checked={visible} readOnly />
            <button onClick={() => dispatch(actions.changeChecked())}>visible/unvisible</button>
        </div>
    </div>)
}
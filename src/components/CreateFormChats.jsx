import { useEffect, useRef, useState } from "react"
import { nanoid } from "nanoid"
import { useDispatch } from "react-redux"
import * as actions from '../store/MessageReducer/actions'

function CreateFormChats({ setShowForm }) {
    const inputRef = useRef(null)
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()
    const setterTitle = (e) => {
        setTitle(e.target.value)
    }
    const addChat = (e) => {
        e.preventDefault()
        if (title) {
            let chat = { id: nanoid(), title, messages: [] }
            dispatch(actions.addChat(chat))
            setShowForm(false)
        }
    }
    useEffect(() => {
        inputRef.current?.focus()
    }, [])
    return (
        <div className="pushWindow">
            <form onSubmit={addChat}>
                <div className="pushWindow_item">
                    <input ref={inputRef} type="text" onChange={setterTitle} value={title} />
                    <button > + Add </button>
                </div>
            </form>
        </div>
    )
}
export default CreateFormChats
import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import CreateFormChats from "../components/CreateFormChats"
import * as actions from "../store/MessageReducer/actions"

function ChatsPage() {
    const chats = useSelector(state => state.reducerMessages.chats)
    const dispatch = useDispatch()
    const [showForm, setShowForm] = useState(false)
    const handleSetShowForm = () => {
        if (!showForm) {
            setShowForm(true)
        }
    }
    return (
        <div className="wrapNewChat">
            <button onClick={handleSetShowForm}>+ New chat</button>
            {showForm &&
                <CreateFormChats setShowForm={setShowForm} />}
            <div className="listChatsWrap">
                <ul className="listChats">
                    {chats.map((link) => <li className="liItem" key={link.id} >
                        <Link to={link.id} className="listChatsItem" >{link.title}</Link>
                        <button className="homeButton" onClick={() => dispatch(actions.delChat(link.id))} > del </button>
                    </li>)}
                </ul>
            </div>

        </div >
    )
}
export default ChatsPage
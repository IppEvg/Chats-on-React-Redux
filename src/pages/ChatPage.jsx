import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import MessagesList from '../components/MessagesList'
import { addMessage } from '../store/MessageReducer/actions'

import '../App.css'

function ChatPage() {
    const [isAnswer, setIsAnswer] = useState(false)
    const params = useParams()
    const list = useSelector(state => state.reducerMessages.chats.find(e => e.id === params.chatId))
    const dispatch = useDispatch()
    useEffect(() => {
        if (isAnswer) {
            setTimeout(() => {
                let date = new Date().toTimeString().slice(0, 8)
                dispatch(addMessage(params.chatId, { time: date, autor: 'Computer', text: 'Hello, I am Computer. You will be answered within a few minutes' }))
                setIsAnswer(false)
            }, 1500)
        }
    }, [isAnswer, dispatch, list, params.chatId])
    return (
        <div className="chatId">
            <MessagesList list={list} ></MessagesList>
            <Message setIsAnswer={setIsAnswer} ></Message>
        </div>
    )
}
export default ChatPage
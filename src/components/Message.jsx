import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { addMessage } from "../store/MessageReducer/actions"

import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { createTheme } from '@mui/material/styles'
import { blueGrey } from '@mui/material/colors'

import './message.css'

function Message({ setIsAnswer }) {
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const chats = useSelector(state => state.reducerMessages.chats)
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const sent = (e) => {
        e.preventDefault()
        let date = new Date().toTimeString().slice(0, 8)
        if (chats.length > 0) {
            const newObj = { time: date, autor: name, text: text }
            dispatch(addMessage(params.chatId, newObj))
            setText('')
            e.target.children[3].value = ""
            setIsAnswer(true)
        } else {
            navigate('/chats')
        }

    }
    const theme = createTheme({
        palette: {
            primary: {
                light: blueGrey[300],
                main: blueGrey[500],
                dark: blueGrey[700],
                darker: blueGrey[900],
            },
        },
    });
    return (
        <form className="wrapMessage" onSubmit={(e) => sent(e)}>
            <h1 className='h1'>Message</h1>
            {/* <input className="nameInput" type="text" onChange={(event) => setName(event.target.value)} ></input> */}
            <TextField
                id="outlined-basic"
                label="Your name"
                variant="outlined"
                size="small"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)} >{name}</TextField>
            {/* <input data-id={'11'} className="nameInput" type="textarea" onChange={(event) => setText(event.target.value)} ></input> */}
            <TextField
                id="outlined-basic"
                label="Your message"
                variant="outlined"
                size="small"
                maxRows={7}
                type="textarea"
                width="233"
                value={text}
                onChange={(event) => setText(event.target.value)} >{text}</TextField>
            {/* <button type="submit" className="buttonToggle">Sent</button> */}
            <Button variant="contained" size="normal" theme={theme} type='submit'>Sent</Button>
        </form>
    )
}

export default Message

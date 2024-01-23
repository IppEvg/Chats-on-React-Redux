import * as React from 'react'

import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"

import "./MessagesList.css"

function MessagesList({ list }) {
    return (<> {list && <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {list.messages.map((item, index) => <ListItem alignitem="flex-center" key={index}> <span className="leftTime"> {item.time} :	&emsp; </span>
            <span className="nameInputName">  {item.autor}-	&emsp;   </span> <span> {item.text} </span></ListItem>)}
    </List>}
    </>
        // <ul className="listMessages">
        //     {props.list.map((item, index) => <li className="messages" key={index}><span className="leftTime">{item.time}</span>
        //         <span className="nameInputName">{item.autor} </span> <span>{item.text}</span></li>)}
        // </ul>
    )
}
export default MessagesList
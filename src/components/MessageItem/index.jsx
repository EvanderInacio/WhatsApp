import { useEffect, useState } from "react";
import { Message, Item} from "./styles";

export function MessageItem({data, user}) {
  const [time, setTime] = useState('')

  useEffect(() => {
    if(data.date > 0) {
      let d = new Date(data.date.seconds * 1000) 
      let hours = d.getHours()
      let minutes = d.getMinutes()

      hours = hours < 10 ? '0'+hours : hours
      minutes = minutes < 10 ? '0'+minutes : minutes
      setTime(`${hours}:${minutes}`)
    }
  }, [data])

  return (
    <Message style={{
      justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
    }}>
      <Item
        style={{backgroundColor: user.id === data.author ? '#D9FDD3' : '#FFF' }}
      > 
        <div className="messageText">{data.body}</div>
        <div className="messageDate">{time}</div>
      </Item>
    </Message>
  )
}
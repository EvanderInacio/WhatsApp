import { useEffect, useState } from 'react'
import { Container, Content } from './styles'

export function ChatList({onClick, active, data}) {
  const [time, setTime] = useState('')

  useEffect(() => {
    if(data.lastMessageDate > 0) {
      let d = new Date(data.lastMessageDate.seconds * 1000) 
      let hours = d.getHours()
      let minutes = d.getMinutes()

      hours = hours < 10 ? '0'+hours : hours
      minutes = minutes < 10 ? '0'+minutes : minutes
      setTime(`${hours}:${minutes}`)
    }
  }, [data])

  return (
    <Container className={active ? 'active' : ''} onClick={onClick}>
     <img src={data.image} />
      <Content>
        <div className="chatListItem">
          <div className="chatName">{data.title}</div>
          <div className='chatData'>{time}</div>
        </div>
        <div className='chatListItem'>
          <div className='last-msg'>
            <p>{data.lastMessage}</p>
          </div>
        </div>
      </Content>
    </Container>
  )
}

import { useState } from 'react'
import { Chat } from './styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export function NewChat({user, chatList, show, setShow}) {
  const [list, setList] = useState([
    {
      id: 123,
      avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Evander'
    },
    {
      id: 123,
      avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Evander'
    },
    {
      id: 123,
      avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Evander'
    },
    {
      id: 123,
      avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Evander'
    },
    {
      id: 123,
      avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Evander'
    },
    {
      id: 123,
      avatar: 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Evander'
    }
  ])

  const handleClose = () => {
    setShow(false)
  }

  return (
    <Chat style={{left: show ? 0 : -420}}>
      <div className="header">
        <div onClick={handleClose} className="button">
          <ArrowBackIcon style={{ color: '#FFF' }} />
        </div>
        <h2>Nova Conversa</h2>
      </div>
      <div className="list">
        {list.map((item, key) => (
          <div className="new-chat" key={key}>
            <img src={item.avatar} alt={item.name} />
            <div className="name">{item.name}</div>
          </div>
        ))}
      </div>
    </Chat>
  )
}

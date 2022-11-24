import { useState, useEffect } from 'react'

import { Container } from './styles/container'
import { HeaderSidebar, Sidebar, Search } from './styles/sidebar'
import { Content } from './styles/content'

import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'
import { ChatList } from './components/ChatListItem'
import { ChatIntro } from './components/ChatIntro'
import { ChatWindow } from './components/ChatWindow'
import { NewChat } from './components/NewChat'

function App() {
  const [chatList, setChatList] = useState([
    {
      chatId: 1,
      title: 'Fulano',
      avatar: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
      chatId: 2,
      title: 'Ciclano',
      avatar: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
      chatId: 3,
      title: 'Beltrano',
      avatar: 'https://www.w3schools.com/howto/img_avatar.png'
    }
  ])
  const [activeChat, setActiveChat] = useState({})
  const [user, setUser] = useState({
    id: 1234,
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "Fulano"
  })
  const [showNewChat, setShowNewChat] = useState(false)

  const handleNewChat = () => {
    setShowNewChat(true)
  }

  return (
    <Container>
      <Sidebar>
        <NewChat 
          chatList={chatList}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <HeaderSidebar>
          <img src={user.avatar} />
          <div className="button">
            <div className="btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>

            <div onClick={handleNewChat} className="btn">
              <ChatIcon style={{ color: '#919191' }} />
            </div>

            <div className="btn">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </HeaderSidebar>

        <Search>
          <div className="input">
            <SearchIcon fontSize="small" style={{ color: '#919191' }} />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </Search>

        <div className="chatList">
          {chatList.map((item, key) => (
            <ChatList 
              key={key}
              data={item}
              active={activeChat.chatId === chatList[key].chatId} 
              onClick={() => setActiveChat(chatList[key])} 
            />
          ))}
        </div>
      </Sidebar>
      <Content>
        {activeChat.chatId !== undefined && <ChatWindow user={user} />}
        {activeChat.chatId === undefined && <ChatIntro />}
      </Content>
    </Container>
  )
}

export default App

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
import { Login } from './components/Login'
import Api from './Api'

function App() {
  const [chatList, setChatList] = useState([])
  const [activeChat, setActiveChat] = useState({})
  const [user, setUser] = useState({
    id: '7MmnbTF4MICbTJtvBNHK',
    name: 'Evander',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  })
  const [showNewChat, setShowNewChat] = useState(false)

  const handleNewChat = () => {
    setShowNewChat(true)
  }

  const handleLoginData = async u => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
    await Api.addUser(newUser)
    setUser(newUser)
    console.log(newUser)
  }

  if(!user) {
    return ( <Login onReceive={handleLoginData}/> )
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
          <div className='header'>
            <img src={user.avatar} alt="" />
            <p>{user.name}</p>
          </div>
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

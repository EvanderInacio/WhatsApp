import { useState, useEffect } from 'react'

import { Container } from './styles/container'
import { HeaderSidebar, Sidebar, Search } from './styles/sidebar'
import { Content } from './styles/content'

import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search';
import { ChatList } from './components/ChatListItem'

function App() {
  const [chatList, setChatList] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}])

  return (
    <Container>
      <Sidebar>
        <HeaderSidebar>
          <img src="https://www.w3schools.com/howto/img_avatar.png" />
          <div className="button">
            <div className="btn">
              <DonutLargeIcon style={{color: "#919191"}}/>
            </div>

            <div className="btn">
              <ChatIcon style={{color: "#919191"}}/>
            </div>

            <div className="btn">
              <MoreVertIcon style={{color: "#919191"}}/>
            </div>
          </div>
        </HeaderSidebar>

        <Search>
          <div className="input">
            <SearchIcon fontSize='small' style={{color: "#919191"}}/>
            <input type="search" placeholder='Procurar ou começar uma nova conversa' />
          </div>
        </Search>

        <div className="chatList">
          {
            chatList.map((item, key) => (
              <ChatList 
                key={key}
              />
            ))
          }
        </div>
      </Sidebar>
      <Content>Chat</Content>
    </Container>
  )
}

export default App

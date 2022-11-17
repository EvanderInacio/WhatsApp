import { ChatBody, ChatContainer, ChatFooter, ChatHeader } from './styles'
import SearchIcon from '@mui/icons-material/Search'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import CloseIcon from '@mui/icons-material/Close'
import SendIcon from '@mui/icons-material/Send'
import MicIcon from '@mui/icons-material/Mic'

export function ChatWindow() {
  return (
    <ChatContainer>
      <ChatHeader>
        <div className="header">
          <img src="https://www.w3schools.com/howto/img_avatar.png" />
          <div className="name">Fulano</div>
        </div>

        <div className="buttons">
          <div className="btn">
            <SearchIcon style={{ color: '#919191' }} />
          </div>
          <div className="btn">
            <AttachFileIcon style={{ color: '#919191' }} />
          </div>
          <div className="btn">
            <MoreVertIcon style={{ color: '#919191' }} />
          </div>
        </div>
      </ChatHeader>

      <ChatBody></ChatBody>

      <ChatFooter>
        <div className="icons">
          <div className="btn">
            <InsertEmoticonIcon style={{ color: '#919191' }} />
          </div>
        </div>
        <div className="input">
          <input 
            type="text"
            placeholder='Digite uma mensagem' 
          />
        </div>
        <div className="buttons">
          <div className="btn">
            <SendIcon style={{ color: '#919191' }} />
          </div>
        </div>
      </ChatFooter>
    </ChatContainer>
  )
}

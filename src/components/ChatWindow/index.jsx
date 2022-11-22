import { useEffect, useState, useRef } from 'react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import {
  ChatBody,
  ChatContainer,
  ChatEmoji,
  ChatFooter,
  ChatHeader
} from './styles'
import SearchIcon from '@mui/icons-material/Search'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import CloseIcon from '@mui/icons-material/Close'
import SendIcon from '@mui/icons-material/Send'
import MicIcon from '@mui/icons-material/Mic'
import { MessageItem } from '../MessageItem'

export function ChatWindow({user}) {

  const body = useRef()

  let recognition = null
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  if(SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition()
  }

  const [emojiOpen, setEmojiOpen] = useState(false)
  const [text, setText] = useState('')
  const [listening, setListening] = useState(false)
  const [list, setList ] = useState([
    {author: 123, body: 'bla'},
    {author: 123, body: 'lorem, bla'},
    {author: 1234, body: 'lorem'},
    {author: 1234, body: 'lorem, lorem'},
    {author: 123, body: 'lorem, bla'},
    {author: 1234, body: 'lorem'},
    {author: 123, body: 'bla'},
    {author: 123, body: 'lorem, bla'},
    {author: 1234, body: 'lorem'},
    {author: 1234, body: 'lorem, lorem'},
    {author: 123, body: 'lorem, bla'},
    {author: 1234, body: 'lorem'},
    {author: 123, body: 'bla'},
    {author: 123, body: 'lorem, bla'},
    {author: 1234, body: 'lorem'},
    {author: 1234, body: 'lorem, lorem'},
    {author: 123, body: 'lorem, bla'},
    {author: 1234, body: 'lorem'},
  ])

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
    }
  }, [list])

  const handleEmojiClick = e => {
    setText(text + e.native)
  }

  const handleOpenEmoji = () => {
    setEmojiOpen(true)
  }

  const handleCloseEmoji = () => {
    setEmojiOpen(false)
  }

  const handleMicClick = () => {
    if(recognition !== null ) {

      recognition.onstart = () => {
        setListening(true)
      }
      recognition.onend = () => {
        setListening(false)
      }
      recognition.onresult = (e) => {
        setText( e.results[0][0].transcript )
      }

      recognition.start()
    }
  }

  const handleSendClick = () => {

  }

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

      <ChatBody ref={body}>
        {list.map((item, key) => (
          <MessageItem 
            key={key}
            data={item}
            user={user}
          />
        ))}
      </ChatBody>

      <ChatEmoji style={{ height: emojiOpen ? '250px' : '0px' }}>
        <Picker
          title="Pick your emoji…"
          onEmojiSelect={handleEmojiClick}
          native={true}
          theme="light"
          skinTonePositions="none"
          searchPosition="none"
          size="1.5em"
          perLine={20}
        />
      </ChatEmoji>

      <ChatFooter>
        <div className="icons">
          <div
            className="btn"
            onClick={handleCloseEmoji}
            style={{ display: emojiOpen ? 'block' : 'none' }}
          >
            <CloseIcon style={{ color: '#919191' }} />
          </div>

          <div
            className="btn"
            onClick={handleOpenEmoji}
            style={{ display: emojiOpen ? 'none' : 'block' }}
          >
            <InsertEmoticonIcon style={{ color: '#919191' }} />
          </div>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="buttons">
          {text === '' && (
            <div onClick={handleMicClick} className="btn">
              <MicIcon style={{ color: listening ? '#126ECE' : '#919191' }} />
            </div>
          )}
          {text !== '' && (
            <div onClick={handleSendClick} className="btn">
              <SendIcon style={{ color: '#919191' }} />
            </div>
          )}
        </div>
      </ChatFooter>
    </ChatContainer>
  )
}

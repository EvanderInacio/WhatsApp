import { Container, Content } from './styles'

export function ChatList({onClick, active, data}) {
  return (
    <Container className={active ? 'active' : ''} onClick={onClick}>
     <img src={data.avatar} />
      <Content>
        <div className="chatListItem">
          <div className="chatName">{data.title}</div>
          <div className='chatData'>15:00</div>
        </div>
        <div className='chatListItem'>
          <div className='last-msg'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aliquid excepturi amet consequuntur cum omnis harum, error suscipit aperiam possimus doloremque ab praesentium nesciunt rem blanditiis, reiciendis ut esse provident?</p>
          </div>
        </div>
      </Content>
    </Container>
  )
}

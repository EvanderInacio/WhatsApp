import { Container, Content } from './styles'

export function ChatList() {
  return (
    <Container>
      <img src="https://www.w3schools.com/howto/img_avatar.png" />
      <Content>
        <div className="chatListItem">
          <div className="chatName">Andre Silva</div>
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

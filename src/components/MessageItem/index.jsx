import { Message, Item} from "./styles";

export function MessageItem({data, user}) {
  return (
    <Message style={{
      justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
    }}>
      <Item
        style={{backgroundColor: user.id === data.author ? '#DCF8C6' : '#FFF' }}
      >
        <div className="messageText">{data.body}</div>
        <div className="messageDate">17:00</div>
      </Item>
    </Message>
  )
}
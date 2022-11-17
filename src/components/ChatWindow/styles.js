import styled from 'styled-components'

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const ChatHeader = styled.header`
  height: 60px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header {
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 0 15px;
    }

    .name {
      font-size: 17px;
      color: #000;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    margin-right: 15px;

    .btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
`

export const ChatBody = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color: #E5DDD5;

`

export const ChatFooter = styled.footer`
  height: 62px;
  display: flex;
  gap: 15px;
  align-items: center;
  margin: 0 15px;

  .icons{
    display: flex;
  }

  .input {
    flex: 1;

    input {
      width: 100%;
      height: 40px;
      border: 0;
      outline: 0;
      background-color: #FFF;
      border-radius: 20px;
      font-size: 15px;
      color: #4A4A4A;
      padding-left: 15px;
    }
  }

  .buttons{
    display: flex;
  }
`
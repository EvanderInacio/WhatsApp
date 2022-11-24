import styled from 'styled-components'

export const Chat = styled.div`
  width: 35%;
  max-width: 415px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
  transition: all ease 0.5s;
  
  .header {
    display: flex;
    background-color: #00bfa5;
    align-items: center;
    padding: 60px 15px 15px 15px;

    .button {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    h2 {
      font-size: 19px;
      height: 40px;
      line-height: 40px;
      flex: 1;
      font-weight: bold;
      color: #ffff;
      margin-left: 20px;
    }
  }

  .list {
    flex: 1;
    overflow-y: auto;

    .new-chat{
      display: flex;
      align-items: center; 
      padding: 15px;
      cursor: pointer;

      &:hover{
        background-color: #F5F5F5;
      }

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 15px;
      }
      
      .name{
        font-size: 17px;
        color: #000;
      }
    }

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`

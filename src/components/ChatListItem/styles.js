import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 70px;

  &:hover{
    background-color: #F5F5F5;
  }

  &.active{
    background-color: #EBEBEB;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 15px;
  }
`

export const Content = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #eee;
  padding-right: 15px;
  margin-left: 15px;

  flex-wrap: wrap;
  min-width: 0;

  .chatListItem{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .chatName {
      font-size: 17px;
      color: #000;
    }
    
    .chatData {
      font-size: 12px;
      color: #999;
    }

    .last-msg{
      font-size: 14px;
      color: #999;
      display: flex;
      width: 100%;
      margin-bottom: 0.5rem;

      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0;
      }
    }
  }

`
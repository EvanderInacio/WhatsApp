import styled from "styled-components";

export const Sidebar = styled.div`
  width: 35%;
  max-width: 415px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #DDD;

  .chatList{
    flex: 1;
    background-color: #fff;
    overflow-y: auto;
  }
`

export const HeaderSidebar = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
  }

  .button{
    display: flex;

    .btn {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

`

export const Search = styled.div`
  background: #F6F6F6;
  border-bottom: 1px solid #eee;
  padding: 5px 15px;

  .input{
    background-color: #FFF;
    height: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0 10px;

    input{
      flex: 1;
      border: 0;
      outline: 0;
      background-color: transparent;
      margin-left: 10px;
    }
  }

`
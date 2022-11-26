import styled from "styled-components";

export const Intro = styled.div`
 display: flex;
 flex-direction: column;
 background-color: ${(props) => props.theme.background};
 justify-content: center;
 align-items: center;
 height: 100vh;
 border-bottom: 7px solid #4ADF83;

 h1 {
  font-size: 32px;
  color: ${(props) => props.theme.text};
  font-weight: normal;
  margin-top: 30px;
  text-align: center;
 }

 h2 {
  font-size: 14px;
  font-weight: normal;
  margin-top: 20px;
  line-height: 20px;
  text-align: center;
  color: ${(props) => props.theme.text};
 }
 
`
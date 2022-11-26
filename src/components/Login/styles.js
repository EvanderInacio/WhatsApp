import styled from "styled-components";

export const LoginComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  
  .polygon {
    position: absolute;
    top: -5rem;
    left: -10rem;
    display: block;
    

    @media(max-width: 900px) {
      display: none;
    }
  }

  .footer{
    position: absolute;
    bottom: -2.5rem;
    z-index: -1;
    width: 100%;
    max-width: 100vw;
  }

`

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;

  .logo {
    display: flex;
    align-items: center;
    gap: .5rem;

    h1 {
      font-size: 3rem;
      font-weight: 700;
      color: #4ADF83;

      @media (max-width: 500px) {
        font-size: 2.4rem;
      }
    }
  }

  p {
    font-weight: 500;
    font-size: 1.2rem;
  }
  
`

export const Button = styled.button`
  border: none;
  cursor: pointer;
  width: 22rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .6rem;
  background: ${(props) => props.background};
  margin: .5rem 0;

  &:hover {
    background: ${props => props.hover};
  }

  @media(max-width: 400px) {
    width: 18rem;
    height: 4rem;
  }

  span {
    font-size: 20px;
    font-weight: 600;
    line-height: 23px;
    color: #ffff;
  }
`
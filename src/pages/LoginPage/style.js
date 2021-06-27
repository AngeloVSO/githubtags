import styled from "styled-components";

export const MainArea = styled.main`
  min-height: 600px;
  height: 100vh;
  width: 100vw;
  background-color: #203354;
  display: grid;
  place-items: center;
  overflow: hidden;

  img {
    width: 500px;
    position: absolute;
    leff: 0;
    bottom: 0;

    @media(max-width: 450px) {
      max-widht: 414px;
    }
  }
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 50%;
  min-width: 340px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.42);
  padding: 0 32px;
  z-index: 1;
  
  > div {
    h1 {
      font-size: 38px;
      @media (max-width: 710px) {
        font-size: 22px;
      }
    }

    p {
      font-size: 18px;
    }

    margin-bottom: 32px;
  }
  

  p {
    display: inline-block;
    cursor: pointer;
    font-weight: 500;
    transition: 0.3s;
    text-align: center;
  }

  input {
    height: 40px;
    width: 60%;
    margin: 8px 0%;
    padding: 8px;
  }

  button {
    background: #223354;
    border: 0;
    color: #fff;
    font-weight: 500;
    padding: 8px 16px;
    margin: 4px 0 8px 0;
    font-size: 22px;
    transition: 0.3s;
    cursor: pointer;
    margin-top: 32px;

    :hover {
      filter: opacity(0.85);
    }
  }
`;

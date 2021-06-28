import styled from "styled-components";

export const MainArea = styled.main`
  height: 100vh;
  background-color: #203354;
  display: grid;
  place-items: center;
  overflow: hidden;

  > img {
    width: 500px;
    position: absolute;
    leff: 0;
    bottom: 0;
    opacity: .5;

    @media (max-width: 450px) {
      max-width: 100%;
    }
  }
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 70%;
  width: 50%;
  border-radius: 20px;
  min-width: 340px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.42);
  padding: 30px 42px;
  z-index: 1;
  
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 250px;

        @media (max-width: 700px) {
          width: 200px;
        }
      }

    p {
      font-size: 18px;
    }

    margin-bottom: 24px;
  }
  

  p {
    display: inline-block;
    cursor: pointer;
    font-weight: 500;
    transition: 0.3s;
    font-size: 18px;
    text-align: center;

    @media (max-width: 850px) {
      font-size: 16px;
    }
  }

  input {
    height: 40px;
    width: 60%;
    margin: 8px 0%;
    padding: 8px;
  }

  button {
    background: #93156F;
    border: 0;
    color: #fff;
    font-weight: 500;
    padding: 8px 16px;
    margin: 4px 0 8px 0;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 22px;
    transition: 0.3s;
    cursor: pointer;
    margin-top: 32px;

    :hover {
      filter: opacity(0.85);
    }
  }
`;

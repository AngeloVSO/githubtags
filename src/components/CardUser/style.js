import styled from "styled-components";

export const Div = styled.div`
padding: 20px;
height: 100%;
min-width: 300px;
display: grid;
grid-template-columns: 1fr;
place-items: center;
background-color: rgba(255, 255, 255, 0.7);
box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.42);

div {
  display: flex;
  flex-direction: column;
}

div > div {
  img {
    width: 20px;
  }

  p {
    :first-child {
      font-size: 32px;
      font-weight: 500;
      align-self: center;
    }
    
    margin: 8px 0;
    font-size: 18px;
    cursor: pointer;
    transition: .2s;
    
    :hover {
      transform: scale(1.02)
    }
  }

  span {
    font-size: 18px;
    color: grey;
    margin-bottom: 8px;
  }
}
`;

export const Avatar = styled.img`
border-radius: 30%;
width: 200px;
align-self: center;
`;

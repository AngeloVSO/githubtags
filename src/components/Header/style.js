import styled from "styled-components";

export const Header = styled.header`
height: 80px;
background-color: #203354;
padding: 16px 48px;
display: flex;
align-items: center;
justify-content: space-between;
position: sticky;
top: 0;
transition: .2s;
z-index: 999;

@media(max-width: 840px) {
    padding: 8px;
  }

h1 {
  color: #fff;
  font-weight: 400;
  transition: .2s;

  @media(max-width: 840px) {
    font-size: 26px;
  }

  @media(max-width: 580px) {
    font-size: 14px;
  }
}
`;
export const Logo = styled.div`
display: flex;
align-items: center;

img {
  width: 120px;
  margin-right: 16px;
  transition: .2s;

  @media(max-width: 580px) {
    width: 80px;
    margin-right: 8px;
  }
}
`;

export const Form = styled.form`
width: 25%;
transition: .2s;

@media(max-width: 840px) {
    width: 40%;
    margin: 0 8px;
  }

input {
  height: 36px;
  padding: 0 8px;
  width: 100%;
  outline: none;
  
  @media(max-width: 580px) {
    padding: 0;
  }
}
`;

export const UserArea = styled.div`
display: flex;
align-items: center;

h1 {
  margin-right: 16px;
  transition: .2s;

  @media(max-width: 580px) {
    margin-right: 8px;
  }
}

button {
  border: 0;
  outline: none;
  background: transparent;
  cursor: pointer;

  img {
    width: 40px;
    filter: invert();
    transition: .2s;

    @media(max-width: 580px) {
      width: 24px;
    }
  }
}
`;

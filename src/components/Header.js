import React from "react";
import styled from "styled-components";
import LogoGit from "../images/logogithub.svg";
import Exit from "../images/exit.svg";
import { useHistory } from "react-router-dom";
import { goToLogin } from "../router/coordinator";

const HeaderPage = ({ handleUserSubmit, handleUserInput }) => {
  const history = useHistory();

  const localUser = window.localStorage.getItem("user");

  const logout = () => {
    window.localStorage.removeItem("token");

    goToLogin(history);
  };

  return (
    <Header>
      <Logo>
        <img src={LogoGit} alt="Logo GitHub" />
        <h1>GitHub TAGS</h1>
      </Logo>

      <Form onSubmit={handleUserSubmit}>
        <input onChange={handleUserInput} placeholder="Digite seu usuário GitHub" />
      </Form>

      <UserArea>
        <h1>
          Olá, <span>{localUser}</span>
        </h1>
        <button onClick={logout} title="fazer logout">
          <img src={Exit} alt="Logout" />
        </button>
      </UserArea>
    </Header>
  );
};

export default HeaderPage;

const Header = styled.header`
  height: 80px;
  background-color: #203354;
  padding: 16px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;
    font-weight: 400;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    filter: invert();
    margin-right: 16px;
  }
`;

const Form = styled.form`
  width: 25%;

  input {
    height: 36px;
    padding: 0 8px;
    width: 100%;
    outline: none;
  }
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-right: 16px;
  }

  button {
    border: 0;
    outline: none;
    background: transparent;
    cursor: pointer;

    img {
      width: 40px;
      filter: invert();
    }
  }
`;

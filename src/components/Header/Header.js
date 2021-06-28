import React from "react";
import LogoGitTags from "../../images/gittags.svg";
import Exit from "../../images/exit.svg";
import { useHistory } from "react-router-dom";
import { goToHome, goToLogin } from "../../router/coordinator";
import { Header, Logo, Form, UserArea } from "./style";

const HeaderPage = ({ handleUserInput, userInput }) => {
  const history = useHistory();

  const localUser = window.localStorage.getItem("user");

  const logout = () => {
    window.localStorage.removeItem("token");

    goToLogin(history);
  };

  return (
    <Header>
      <Logo>
        <img src={LogoGitTags} alt="Logo GitHub TAGS" />
      </Logo>

      <Form onSubmit={() => goToHome(history, userInput)}>
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


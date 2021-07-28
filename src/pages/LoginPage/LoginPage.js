import React, { useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import GitHub from "../../images/logogithub.svg";
import LogoGithubTags from "../../images/gittags_black.svg";
import { MainArea, LoginForm } from "./style";
import githubProvider from "../../config/authMethod";
import { goToHome } from "../../router/coordinator";
import githubAuth from "../../services/auth";

const LoginPage = () => {
  useLayoutEffect(() => {
    if (window.localStorage.getItem("token")) {
      goToHome(history, window.localStorage.getItem("user"));
    }
  }, []);

  const [loaging, setLoading] = useState(false)
  
  const history = useHistory()

  const login = async (provider) => {
    setLoading(true)
    const result = await githubAuth(provider)

    if (result?.credential.accessToken) {
      window.localStorage.setItem("token", result.credential.accessToken); 
      window.localStorage.setItem("user", result.additionalUserInfo.username); 
      setLoading(false)
      goToHome(history, window.localStorage.getItem("user"));
    }
  };

  return (
    <MainArea>
        <img src={GitHub} alt="User" />
        <LoginForm>
          {!loaging ? 
          <>
          <div>
            <img src={LogoGithubTags} alt="User" />
            <p>Seu gerenciador de repositórios!</p>
          </div>
          
          <p>Para ajudar na sua organização e consulta, aqui no GitHub TAGS você poderá criar tags para seus repositórios preferidos, filtra-las de acordo com as tags cadastradas, removê-las caso queira mudar de tag e até adicionar mais de uma tag. Ah! Não se precocupe que não deixaremos você cadastrar tags repetidas, pode confiar! :)</p>
          <button onClick={() => login(githubProvider)}>login com github</button>
          </>
          : <div>Carregando...</div>}
        </LoginForm>
    </MainArea>
  );
};

export default LoginPage;


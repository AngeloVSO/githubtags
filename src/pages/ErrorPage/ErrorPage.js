import React from "react";
import { useHistory } from "react-router-dom";
import { goToHome } from "../../router/coordinator";


const ErrorPage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>
        Ops! Essa página não existe, clique no botão abaixo para ser direcionado
        para a sua página inicial.
      </h1>
      <button onClick={() => goToHome(history, window.localStorage.getItem("user"))}>Página inicial</button>
    </div>
  );
};

export default ErrorPage;
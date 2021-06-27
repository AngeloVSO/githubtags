import React from "react";
import Repo from "../../images/folder.svg";
import { CardRepo, MainArea } from "./style";

const CardPublicRepos = ({ publicRepos }) => {

    const publicReposMap = publicRepos?.map((data) => (
        <CardRepo key={data.id}>
          <img src={Repo} alt="Repository" />
          <div>
            <p>
              <strong>id:</strong> {data.id}
            </p>
            <p>
              <strong>repositório:</strong> {data.name}
            </p>
            <p>
              <strong>descrição:</strong> {data.description}
            </p>
            <p>
              <a href={data.html_url} target="_blank" rel="noreferrer">
                ir para repositório
              </a>
            </p>
          </div>
        </CardRepo>))

    return (<MainArea>{publicReposMap}</MainArea>)
}

export default CardPublicRepos


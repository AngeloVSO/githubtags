import React from "react";
import User from "../../images/user.svg";
import Repo from "../../images/folder.svg";
import Star from "../../images/star.svg";
import { Avatar, Div } from "./style";

const CardUser = ({ avatar, username, repos, name, starredTotal, toggleRepos }) => {

  const accessPuclicRepos = () => {
    toggleRepos(true)
  }

  const accessStarredRepos = () => {
    toggleRepos(false)
  }

  return (
    <>
      <Div>
        <div>
          <Avatar src={avatar} alt="Avatar" />
          <div>
            <p>{name}</p>
            <span>
              <img src={User} alt="User" /> {username}
            </span>
            <p onClick={accessPuclicRepos}>
              <img src={Repo} alt="Folder" /> {repos} repositórios públicos 
            </p>
            <p onClick={accessStarredRepos}>
              <img src={Star} alt="Star" /> {starredTotal} repositórios com
              estrelas
            </p>
          </div>
        </div>
      </Div>
    </>
  );
};

export default CardUser;


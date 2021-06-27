import React, { useEffect, useLayoutEffect, useState } from "react";
import CardPublicRepos from "../../components/CardPublicRepo/CardPublicRepo";
import CardStarredRepo from "../../components/CardStarredRepo/CardStarredRepo";
import CardUser from "../../components/CardUser/CardUser";
import HeaderPage from "../../components/Header/Header";
import { useHistory, useParams } from "react-router-dom";
import { goToLogin } from "../../router/coordinator";
import { getStarredRepos, getPublicRepos } from "../../services/api";
import { MainArea, CardsArea } from "./style";

const HomePage = () => {
  const [data, setData] = useState("");
  const [userInput, setUserInput] = useState(
    window.localStorage.getItem("user")
  );
  const [notFound, setNotFound] = useState(null);
  const [starredData, setStarredData] = useState([]);
  const [publibReposData, setPublicReposData] = useState([])
  const [toggleRepos, setToggleRepos] = useState(true);
  const history = useHistory();
  const params = useParams();

  useLayoutEffect(() => {
    if (!window.localStorage.getItem("token")) {
      goToLogin(history);
    }

    getUserProfile(params.user);
  }, []);

  useEffect(() => {
    for (let item of starredData) {
      {
        item.tagUser = [];
      }
    }
  }, [starredData]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const getUserProfile = (user) => {
    fetch(`https://api.github.com/users/${user}`, {
      headers: {
        Authorization: `token ${window.localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setNotFound(data.message);
        } else {
          setData(data);
          setNotFound(null);
          getPublicRepos(user, setPublicReposData);
          getStarredRepos(user, setStarredData);
        }
      });
  };

  return (
    <>
      <HeaderPage
        handleUserSubmit={getUserProfile}
        handleUserInput={handleUserInput}
        userInput={userInput}
      />
      <MainArea>
        {notFound ? (
          <h1>{notFound}</h1>
        ) : (
          <CardsArea>
            {data && (
              <>
                <CardUser
                  avatar={data.avatar_url}
                  name={data.name}
                  repos={data.public_repos}
                  username={data.login}
                  starredTotal={starredData.length}
                  toggleRepos={setToggleRepos}
                />
                {toggleRepos ? <CardPublicRepos publicRepos={publibReposData}/> :           
                  <CardStarredRepo starredRepo={starredData} />
                }
              </>
            )}
          </CardsArea>
        )}
      </MainArea>
    </>
  );
};

export default HomePage;
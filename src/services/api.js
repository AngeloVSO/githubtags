export const getStarredRepos = (user, setData) => {
  fetch(`https://api.github.com/users/${user}/starred`, {
    headers: {
      Authorization: `token ${window.localStorage.getItem('token')}`
    }
  })
    .then((res) => res.json())
    .then((data) => setData(data));
};

export const getPublicRepos = (user, setData) => {
  fetch(`https://api.github.com/users/${user}/repos`, {
    headers: {
      Authorization: `token ${window.localStorage.getItem('token')}`
    }
  })
    .then((res) => res.json())
    .then((data) => setData(data));
};
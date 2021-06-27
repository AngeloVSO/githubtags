export const goToLogin = (history) => {
    history.push("/");
  };

export const goToHome = (history, user) => {
    history.push(`/${user}`);
  };
import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import Favorites from "pages/Favorites";

const AppRouter = () => {
  const [favoritesUsers, setFavoritesUsers] = useState([]);

  // Add || Remove User From The Favorites
  const setToFavorites = (user) => {
    if (
      favoritesUsers.findIndex(
        (favoriteUser) => favoriteUser.id.value === user.id.value
      ) === -1
    )
      setFavoritesUsers((favortiesUsers) => [...favortiesUsers, user]);
    else {
      setFavoritesUsers(
        favoritesUsers.filter((favortieUser) => favortieUser.id.value !== user.id.value)
      );
    }
  };
  
  useEffect(() => {
    const favortiesUsersFromLS = JSON.parse(localStorage.getItem("favoritesUsers") || []);
    setFavoritesUsers(favortiesUsersFromLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritesUsers", JSON.stringify(favoritesUsers));
  }, [favoritesUsers]);

  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Home
                setToFavorites={setToFavorites}
                favoritesUsers={favoritesUsers}
              />
            )}
          />
          <Route
            exact
            path="/favorites"
            component={() => (
              <Favorites
                setToFavorites={setToFavorites}
                favoritesUsers={favoritesUsers}
              />
            )}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;

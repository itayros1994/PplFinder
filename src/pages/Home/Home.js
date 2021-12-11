import React, { useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

const Home = ({ favoritesUsers, setToFavorites }) => {
  const [nationalities, setNationalities] = useState([]);
  const { users, isLoading } = usePeopleFetch(nationalities);

  const setNational = (national) => {
    if (nationalities.includes(national)) {
      setNationalities(
        nationalities.filter((nationalFilterd) => {
          nationalFilterd !== national;
        })
      );
    } else {
      setNationalities((nationalities) => [...nationalities, national]);
    }
  };

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList
          setNational={setNational}
          users={users}
          isLoading={isLoading}
          favoritesUsers={favoritesUsers}
          setToFavorites={setToFavorites}
        />
      </S.Content>
    </S.Home>
  );
};

export default Home;

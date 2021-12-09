import React, { useEffect } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import * as S from "./style";
import { usePeopleFetch } from "hooks";

const Favorites = ({ favoritesUsers , setToFavorites}) => {
  const {isLoading } = usePeopleFetch();
  
  useEffect(() => {
    console.log(favoritesUsers );
  }, []);


  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
           <UserList isLoading={isLoading} users={favoritesUsers} setToFavorites={setToFavorites} favoritesUsers={favoritesUsers} />
          </Text>
        </S.Header>
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;

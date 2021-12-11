import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import * as S from "./style";

const Favorites = ({ favoritesUsers, setToFavorites }) => {
  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            <UserList
              isLoading={false}
              users={favoritesUsers}
              setToFavorites={setToFavorites}
              favoritesUsers={favoritesUsers}
            />
          </Text>
        </S.Header>
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;

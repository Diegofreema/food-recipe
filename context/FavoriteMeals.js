import { createContext, useState } from 'react';

const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export const FavoriteContextProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const addFavorite = (id) => {
    setFavoriteIds((prevId) => [id, ...prevId]);
  };
  const removeFavorite = (id) => {
    setFavoriteIds((currentIds) =>
      currentIds.filter((currentId) => currentId !== id)
    );
  };

  const value = {
    ids: favoriteIds,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;

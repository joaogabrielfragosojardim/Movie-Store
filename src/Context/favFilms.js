import React, { createContext, useState, useContext } from "react";

const FavFilmsContext = createContext();

export default function FavFilmsProvider({ children }) {
  const [favFilms, setFavFilms] = useState([]);
  return (
    <FavFilmsContext.Provider value={{ favFilms, setFavFilms }}>
      {children}
    </FavFilmsContext.Provider>
  );
}

export function useFavFilms() {
  const context = useContext(FavFilmsContext);
  const { favFilms, setFavFilms } = context;
  return { favFilms, setFavFilms };
}

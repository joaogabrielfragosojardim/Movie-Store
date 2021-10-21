import React, { createContext, useState, useContext } from "react";

const FilmsContext = createContext();

export default function FilmsProvider({ children }) {
  const [films, setFilms] = useState();
  return (
    <FilmsContext.Provider value={{ films, setFilms }}>
      {children}
    </FilmsContext.Provider>
  );
}

export function useFilms() {
  const context = useContext(FilmsContext);
  const { films, setFilms } = context;
  return { films, setFilms };
}

import "./App.css";
import Header from "./Layout/Header/Header";
import Dashboard from "./Layout/Dashboard/Dashboard";
import FilmsProvider from "./Context/films";
import FavFilmsProvider from "./Context/favFilms";

function App() {
  return (
    <FilmsProvider>
      <FavFilmsProvider>
        <Header />
        <Dashboard />
      </FavFilmsProvider>
    </FilmsProvider>
  );
}

export default App;

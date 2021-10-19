import "./App.css";
import Header from "./Layout/Header/Header";
import Dashboard from "./Layout/Dashboard/Dashboard";
import FilmsProvider from "./Context/films";

function App() {
  return (
    <FilmsProvider>
      <Header />
      <Dashboard />
    </FilmsProvider>
  );
}

export default App;

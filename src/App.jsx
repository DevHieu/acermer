import { Route, Routes } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import NavBar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainMenu />} />
      </Routes>
    </>
  );
}

export default App;

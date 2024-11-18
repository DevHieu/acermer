import { Route, Routes } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import Infomation from "./pages/Infomation";
import NavBar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/info/:id" element={<Infomation />} />
      </Routes>
    </>
  );
}

export default App;

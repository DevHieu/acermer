import { Route, Routes } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import Infomation from "./pages/Infomation";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/info/:id" element={<Infomation />} />
      </Routes>
    </>
  );
}

export default App;

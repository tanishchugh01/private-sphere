import "./App.css";
import Test from "@pages/Test";
import { Route, Routes } from "react-router-dom";
import Home from "./JSX/pages/Home";

function App() {
  return (
    <Routes>
      <Route path="test" element={<Test />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

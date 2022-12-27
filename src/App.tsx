import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
};

export default App;

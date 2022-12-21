import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
    </>
  );
};

export default App;

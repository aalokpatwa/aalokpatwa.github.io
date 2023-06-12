import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar"
import Projects from "./pages/Projects"
import Hobbies from "./pages/Hobbies"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div class="min-h-screen bg-blue-50">
      <header class="h-8 bg-blue-50">

      </header>
      <BrowserRouter>
        <HomePage />
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> */}
      </BrowserRouter>
    </div>

  );
}

export default App;

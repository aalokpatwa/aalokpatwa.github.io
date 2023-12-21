import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage"

function App() {
  return (
    <div class="min-h-screen bg-numberphile-100">
      <header class="h-8 bg-numberphile-100">

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

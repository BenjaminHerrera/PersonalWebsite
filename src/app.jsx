import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Frontpage from "./frontpage.jsx";
import RedirectPage from "./pages/redirect_page.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/meet" element={<RedirectPage />} />
    </Routes>
  );
}

export default App;

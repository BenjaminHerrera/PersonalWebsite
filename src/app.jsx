import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Frontpage from "./pages/front_page.jsx";
import MeetingRedirectPage from "./pages/meeting_redirect_page.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/meet" element={<MeetingRedirectPage />} />
    </Routes>
  );
}

export default App;

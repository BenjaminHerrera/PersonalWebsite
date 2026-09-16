import React from "react";
import { Routes, Route } from "react-router-dom";
import Frontpage from "./pages/front_page.jsx";
import MeetingRedirectPage from "./pages/meeting_redirect_page.jsx";
import PostsFront from "./pages/posts_front.jsx";
import Background from "./pages/background.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/meet" element={<MeetingRedirectPage />} />
      <Route path="/posts" element={<PostsFront />} />
      <Route path="/background" element={<Background />} />
    </Routes>
  );
}

export default App;

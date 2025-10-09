import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Frontpage from "./pages/front_page.jsx";
import MeetingRedirectPage from "./pages/meeting_redirect_page.jsx";
import PostsFront from "./pages/posts_front.jsx";
import Post from "./pages/post_page.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/meet" element={<MeetingRedirectPage />} />
      <Route path="/news" element={<PostsFront />} />
      <Route path="/news/:slug" element={<Post />} />
    </Routes>
  );
}

export default App;

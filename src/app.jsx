import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Frontpage from "./pages/front_page.jsx";
import MeetingRedirectPage from "./pages/meeting_redirect_page.jsx";
import PostsFront from "./pages/posts_front.jsx";
import Post from "./pages/post_page.jsx";
import AboutMe from "./pages/about_me.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/meet" element={<MeetingRedirectPage />} />
      <Route path="/posts" element={<PostsFront />} />
      <Route path="/posts/:slug" element={<Post />} />
      <Route path="/about_me" element={<AboutMe />} />
    </Routes>
  );
}

export default App;

import { Outlet, Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import Discover from "./components/discover/Discover";
import Forum from "./components/forum/Forum";
import Home from "./components/Home";
import Inbox from "./components/inbox/Inbox";
import LikedSongs from "./components/userinfo/LikedSongs";
import TopArtists from "./components/userinfo/TopArtists";
import TopSongs from "./components/userinfo/TopSongs";
import UserProfile from "./components/userinfo/UserProfile";
import Login from "./components/userinfo/Login";
import Navbar from "./components/Navbar";

export default function App() {
  const [login, setLogin] = useState();

  return (
    <>
      <div className="App">
        <h1>Spotify Social</h1>

        <Routes>
          <Route path="/" element={<Navbar loggedIn={login} />}>
            <Route index element={<Home />} />
            <Route path="discover" element={<Discover />} />
            <Route path="forum" element={<Forum />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="liked" element={<LikedSongs />} />
            <Route path="artists" element={<TopArtists />} />
            <Route path="songs" element={<TopSongs />} />
            <Route path="profile" element={<UserProfile />} />
            <Route
              path="login"
              element={<Login loggedIn={login} logIn={setLogin} />}
            />

            <Route
              path="*"
              element={
                <main style={{ padding: "1rem 0" }}>
                  <h2>404 not found</h2>
                  <p>
                    <Link to="/">This link can take you back home though</Link>
                  </p>
                </main>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

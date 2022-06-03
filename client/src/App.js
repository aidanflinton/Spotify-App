import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import AccessTokenProvider from "./contexts/accessTokenContext";

import Discover from "./components/discover/Discover";

import Forum from "./components/forum/Forum";
import Home from "./components/Home";
import Inbox from "./components/inbox/Inbox";
import InboxDetail from "./components/inbox/InboxDetail";
import LikedSongs from "./components/userpreferences/LikedSongs";
import TopArtists from "./components/userpreferences/TopArtists";
import TopSongs from "./components/userpreferences/TopSongs";
import UserProfile from "./components/userinfo/UserProfile";
import Navbar from "./components/Navbar";
import RapForum from "./components/forum/RapForum";
import PopForum from "./components/forum/PopForum";
import CountryForum from "./components/forum/CountryForum";

export default function App() {
  return (
    <>
      <AccessTokenProvider>
        <div className="App">
          <h1>Spotify Social</h1>

          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="discover" element={<Discover />} />
              <Route path="forum" element={<Forum />} />
              <Route path="inbox" element={<Inbox />} />
              <Route path="inbox/detail" element={<InboxDetail />} />
              <Route path="liked" element={<LikedSongs />} />
              <Route path="artists" element={<TopArtists />} />
              <Route path="songs" element={<TopSongs />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="RapForum" element={<RapForum />} />
              <Route path="PopForum" element={<PopForum />} />
              <Route path="CountryForum" element={<CountryForum />} />

              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem 0" }}>
                    <h2>404 not found</h2>
                    <p>
                      <Link to="/">
                        This link can take you back home though
                      </Link>
                    </p>
                  </main>
                }
              />
            </Route>
          </Routes>
        </div>
      </AccessTokenProvider>
    </>
  );
}

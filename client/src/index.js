import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Discover from "./components/Discover";
import Forum from './components/Forum';
import Home from './components/Home';
import Inbox from './components/Inbox';
import LikedSongs from './components/LikedSongs';
import TopArtists from './components/TopArtists';
import TopSongs from "./components/TopSongs";
import UserProfile from './components/UserProfile';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="discover" element={<Discover />} />
      <Route path="forum" element={<Forum />} />
      <Route path="home" element={<Home />} />
      <Route path="inbox" element={<Inbox />} />
      <Route path="liked" element={<LikedSongs />} />
      <Route path="artists" element={<TopArtists />} />
      <Route path="songs" element={<TopSongs />} />
      <Route path="profile" element={<UserProfile />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Spotify Social</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/discover">Discover</Link> |{" "}
        <Link to="/forum">Forum</Link>  |{" "}
        <Link to="/home">Home</Link>  |{" "}
        <Link to="/inbox">Inbox</Link> |{" "}
        <Link to="/liked">Liked Songs</Link> |{" "}
        <Link to="/artists">Top Artists</Link> |{" "}
        <Link to="/songs">Top Songs</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
}
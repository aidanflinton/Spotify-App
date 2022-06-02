import React, { useState, useEffect, useContext } from "react";
import { AccessTokenContext } from "../../contexts/accessTokenContext";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const LikedSongs = () => {
  const [likedSongs, setSavedSongs] = useState(null);

  const { accessToken, setAccessToken } = useContext(AccessTokenContext);

  useEffect(() => {
    fetch("http://localhost:9000/spotify/saved-tracks?token=" + accessToken)
      .then((res) => res.json())
      .then((data) => {
        setSavedSongs(data);
      });
  }, [accessToken]);

  return (
    <div className="App">
      {likedSongs && (
        <TableContainer component={Paper}>
          <Table aria-label="LikedSongs">
            <TableHead>
              <TableRow>
                <TableCell>Album</TableCell>
                <TableCell>Song Title</TableCell>
                <TableCell>Artist</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {likedSongs.items.length > 0 &&
                likedSongs.items.map((song) => (
                  <TableRow
                    key={song.track.name}
                    sx={{ "&:last-child td, &:last-childth": { border: 0 } }}
                  >
                    <TableCell>
                      <img
                        width="64"
                        height="64"
                        src={song.track.album.images[0].url}
                        alt={song.track.album.name}
                      />
                    </TableCell>
                    <TableCell>{song.track.name}</TableCell>
                    <TableCell>
                      {song.track.artists.map((artist) => (
                        <p>{artist.name}</p>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default LikedSongs;

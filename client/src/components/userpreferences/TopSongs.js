import React, { useState, useEffect, useContext } from "react";
import { AccessTokenContext } from "../../contexts/accessTokenContext";
import { Helmet } from "react-helmet";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  FormHelperText,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

function TopSongs() {
  const [term, setTerm] = useState("short_term");

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const [topSongs, setTopSongs] = useState();

  const { accessToken } = useContext(AccessTokenContext);

  useEffect(() => {
    fetch(
      "http://localhost:9000/spotify/top-tracks?token=" +
        accessToken +
        "&timeRange=" +
        term
    )
      .then((res) => res.json())
      .then((data) => {
        setTopSongs(data);
      });
  }, [accessToken, term]);

  return (
    <div className="App">
      <Helmet>
        <title>Top Songs</title>
      </Helmet>
      <Box sx={{ minWidth: 120 }}>
        <FormControl success fullWidth>
          <InputLabel color="success" id="demo-simple-select-label">
            Term
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={term}
            label="Term"
            onChange={handleChange}
          >
            <MenuItem value={"short_term"}>Last month</MenuItem>
            <MenuItem value={"medium_term"}>Last year</MenuItem>
            <MenuItem value={"long_term"}>All Time</MenuItem>
          </Select>
          <FormHelperText color="success">Select period of time</FormHelperText>
        </FormControl>
      </Box>

      {topSongs && (
        <TableContainer component={Paper}>
          <Table aria-label="LikedArtists">
            <TableHead>
              <TableRow>
                <TableCell>Cover Art</TableCell>
                <TableCell>Song Title</TableCell>
                <TableCell>Artist</TableCell>
                <TableCell>Album</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topSongs.items.length > 0 &&
                topSongs.items.map((song) => (
                  <TableRow
                    key={song.name}
                    sx={{ "&:last-child td, &:last-childth": { border: 0 } }}
                  >
                    <TableCell>
                      <img
                        width="64"
                        height="64"
                        src={song.album.images[0].url}
                        alt={"Picture of " + song.name + " album cover"}
                      />
                    </TableCell>
                    <TableCell>{song.name}</TableCell>
                    <TableCell>
                      {song.artists.map((artist) => (
                        <p>{artist.name}</p>
                      ))}
                    </TableCell>
                    <TableCell>{song.album.name}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default TopSongs;

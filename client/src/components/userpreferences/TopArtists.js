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

function TopArtists() {
  const [term, setTerm] = useState("short_term");

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const [topArtists, setTopArtists] = useState();

  const { accessToken, setAccessToken } = useContext(AccessTokenContext);

  useEffect(() => {
    fetch(
      "http://localhost:9000/spotify/top-artists?token=" +
        accessToken +
        "&timeRange=" +
        term
    )
      .then((res) => res.json())
      .then((data) => {
        setTopArtists(data);
      });
  }, [accessToken, term]);

  return (
    <div className="App">
      <Helmet>
        <title>Top Artists</title>
      </Helmet>
      <Box sx={{ m: 1, minWidth: 120 }}>
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
          <FormHelperText color="success">Error</FormHelperText>
        </FormControl>
      </Box>

      {topArtists && (
        <TableContainer component={Paper}>
          <Table aria-label="LikedArtists">
            <TableHead>
              <TableRow>
                <TableCell>Art</TableCell>
                <TableCell>Artist Name</TableCell>
                <TableCell>Genres</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topArtists.items.length > 0 &&
                topArtists.items.map((artist) => (
                  <TableRow
                    key={artist.name}
                    sx={{ "&:last-child td, &:last-childth": { border: 0 } }}
                  >
                    <TableCell>
                      <img
                        width="64"
                        height="64"
                        src={artist.images[0].url}
                        alt={"Picture of " + artist.name}
                      />
                    </TableCell>
                    <TableCell>{artist.name}</TableCell>
                    <TableCell>
                      {artist.genres.map((genre) => (
                        <p>{genre}</p>
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
}

export default TopArtists;

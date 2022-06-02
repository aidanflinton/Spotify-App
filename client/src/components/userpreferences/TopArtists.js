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

const topArtistsAllTime = {
  items: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/00YTqRClk82aMchQQpYMd5",
      },
      followers: {
        href: null,
        total: 931105,
      },
      genres: ["metalcore", "modern rock"],
      href: "https://api.spotify.com/v1/artists/00YTqRClk82aMchQQpYMd5",
      id: "00YTqRClk82aMchQQpYMd5",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb5a8338e9c8489684a7085cf7",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab676161000051745a8338e9c8489684a7085cf7",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f1785a8338e9c8489684a7085cf7",
          width: 160,
        },
      ],
      name: "Our Last Night",
      popularity: 65,
      type: "artist",
      uri: "spotify:artist:00YTqRClk82aMchQQpYMd5",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4vGrte8FDu062Ntj0RsPiZ",
      },
      followers: {
        href: null,
        total: 544973,
      },
      genres: ["instrumental rock"],
      href: "https://api.spotify.com/v1/artists/4vGrte8FDu062Ntj0RsPiZ",
      id: "4vGrte8FDu062Ntj0RsPiZ",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5ebf118bd73da69b2459710fb83",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174f118bd73da69b2459710fb83",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178f118bd73da69b2459710fb83",
          width: 160,
        },
      ],
      name: "Polyphia",
      popularity: 62,
      type: "artist",
      uri: "spotify:artist:4vGrte8FDu062Ntj0RsPiZ",
    },
  ],
  total: 25,
  limit: 2,
  offset: 0,
  href: "https://api.spotify.com/v1/me/top/artists?limit=2&offset=0&time_range=short_term",
  previous: null,
  next: "https://api.spotify.com/v1/me/top/artists?limit=2&offset=2&time_range=short_term",
};
const topArtists6Mo = {
  items: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4vGrte8FDu062Ntj0RsPiZ",
      },
      followers: {
        href: null,
        total: 544973,
      },
      genres: ["instrumental rock"],
      href: "https://api.spotify.com/v1/artists/4vGrte8FDu062Ntj0RsPiZ",
      id: "4vGrte8FDu062Ntj0RsPiZ",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5ebf118bd73da69b2459710fb83",
          width: 640,
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174f118bd73da69b2459710fb83",
          width: 320,
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178f118bd73da69b2459710fb83",
          width: 160,
        },
      ],
      name: "Polyphia",
      popularity: 62,
      type: "artist",
      uri: "spotify:artist:4vGrte8FDu062Ntj0RsPiZ",
    },
  ],
  total: 25,
  limit: 2,
  offset: 0,
  href: "https://api.spotify.com/v1/me/top/artists?limit=2&offset=0&time_range=short_term",
  previous: null,
  next: "https://api.spotify.com/v1/me/top/artists?limit=2&offset=2&time_range=short_term",
};
const topArtists1Mo = topArtistsAllTime;

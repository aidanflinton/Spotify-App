import React, { useState } from "react";
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
  const [term, setTerm] = useState("");

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

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
            <MenuItem color="success" value={topSongs1Mo}>
              Last month
            </MenuItem>
            <MenuItem value={topSongs6Mo}>Last year</MenuItem>
            <MenuItem value={topSongsAllTime}>All Time</MenuItem>
          </Select>
          <FormHelperText color="success">Error</FormHelperText>
        </FormControl>
      </Box>

      {term && (
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
              {term.items.length > 0 &&
                term.items.map((song) => (
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

const topSongs1Mo = {
  items: [
    {
      album: {
        album_type: "SINGLE",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/00YTqRClk82aMchQQpYMd5",
            },
            href: "https://api.spotify.com/v1/artists/00YTqRClk82aMchQQpYMd5",
            id: "00YTqRClk82aMchQQpYMd5",
            name: "Our Last Night",
            type: "artist",
            uri: "spotify:artist:00YTqRClk82aMchQQpYMd5",
          },
        ],
        available_markets: ["AD"],
        external_urls: {
          spotify: "https://open.spotify.com/album/5Y8ghgaAGkjSMeVwSHRgK2",
        },
        href: "https://api.spotify.com/v1/albums/5Y8ghgaAGkjSMeVwSHRgK2",
        id: "5Y8ghgaAGkjSMeVwSHRgK2",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273a3b3a0167f27ffa73669162a",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02a3b3a0167f27ffa73669162a",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851a3b3a0167f27ffa73669162a",
            width: 64,
          },
        ],
        name: "Uninstall",
        release_date: "2022-05-20",
        release_date_precision: "day",
        total_tracks: 5,
        type: "album",
        uri: "spotify:album:5Y8ghgaAGkjSMeVwSHRgK2",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/00YTqRClk82aMchQQpYMd5",
          },
          href: "https://api.spotify.com/v1/artists/00YTqRClk82aMchQQpYMd5",
          id: "00YTqRClk82aMchQQpYMd5",
          name: "Our Last Night",
          type: "artist",
          uri: "spotify:artist:00YTqRClk82aMchQQpYMd5",
        },
      ],
      available_markets: ["AD"],
      disc_number: 1,
      duration_ms: 155784,
      explicit: false,
      external_ids: {
        isrc: "QZHN82285125",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/3j6PTmfO14WXI7LuHnfucf",
      },
      href: "https://api.spotify.com/v1/tracks/3j6PTmfO14WXI7LuHnfucf",
      id: "3j6PTmfO14WXI7LuHnfucf",
      is_local: false,
      name: "Uninstall",
      popularity: 55,
      preview_url:
        "https://p.scdn.co/mp3-preview/691b23a07b9b15bf60721396a91ef22d4af6bdbf?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 1,
      type: "track",
      uri: "spotify:track:3j6PTmfO14WXI7LuHnfucf",
    },
  ],
  total: 50,
  limit: 3,
  offset: 0,
  previous: null,
  href: "https://api.spotify.com/v1/me/top/tracks?limit=3&offset=0",
  next: "https://api.spotify.com/v1/me/top/tracks?limit=3&offset=3",
};

const topSongsAllTime = {
  items: [
    {
      album: {
        album_type: "SINGLE",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/00YTqRClk82aMchQQpYMd5",
            },
            href: "https://api.spotify.com/v1/artists/00YTqRClk82aMchQQpYMd5",
            id: "00YTqRClk82aMchQQpYMd5",
            name: "Our Last Night",
            type: "artist",
            uri: "spotify:artist:00YTqRClk82aMchQQpYMd5",
          },
        ],
        available_markets: ["AD"],
        external_urls: {
          spotify: "https://open.spotify.com/album/5Y8ghgaAGkjSMeVwSHRgK2",
        },
        href: "https://api.spotify.com/v1/albums/5Y8ghgaAGkjSMeVwSHRgK2",
        id: "5Y8ghgaAGkjSMeVwSHRgK2",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273a3b3a0167f27ffa73669162a",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02a3b3a0167f27ffa73669162a",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851a3b3a0167f27ffa73669162a",
            width: 64,
          },
        ],
        name: "Uninstall",
        release_date: "2022-05-20",
        release_date_precision: "day",
        total_tracks: 5,
        type: "album",
        uri: "spotify:album:5Y8ghgaAGkjSMeVwSHRgK2",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/00YTqRClk82aMchQQpYMd5",
          },
          href: "https://api.spotify.com/v1/artists/00YTqRClk82aMchQQpYMd5",
          id: "00YTqRClk82aMchQQpYMd5",
          name: "Our Last Night",
          type: "artist",
          uri: "spotify:artist:00YTqRClk82aMchQQpYMd5",
        },
      ],
      available_markets: ["AD"],
      disc_number: 1,
      duration_ms: 155784,
      explicit: false,
      external_ids: {
        isrc: "QZHN82285125",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/3j6PTmfO14WXI7LuHnfucf",
      },
      href: "https://api.spotify.com/v1/tracks/3j6PTmfO14WXI7LuHnfucf",
      id: "3j6PTmfO14WXI7LuHnfucf",
      is_local: false,
      name: "Uninstall",
      popularity: 55,
      preview_url:
        "https://p.scdn.co/mp3-preview/691b23a07b9b15bf60721396a91ef22d4af6bdbf?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 1,
      type: "track",
      uri: "spotify:track:3j6PTmfO14WXI7LuHnfucf",
    },
    {
      album: {
        album_type: "SINGLE",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/00YTqRClk82aMchQQpYMd5",
            },
            href: "https://api.spotify.com/v1/artists/00YTqRClk82aMchQQpYMd5",
            id: "00YTqRClk82aMchQQpYMd5",
            name: "Our Last Night",
            type: "artist",
            uri: "spotify:artist:00YTqRClk82aMchQQpYMd5",
          },
        ],
        available_markets: ["AD"],
        external_urls: {
          spotify: "https://open.spotify.com/album/5Y8ghgaAGkjSMeVwSHRgK2",
        },
        href: "https://api.spotify.com/v1/albums/5Y8ghgaAGkjSMeVwSHRgK2",
        id: "5Y8ghgaAGkjSMeVwSHRgK2",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273a3b3a0167f27ffa73669162a",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02a3b3a0167f27ffa73669162a",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851a3b3a0167f27ffa73669162a",
            width: 64,
          },
        ],
        name: "Uninstall",
        release_date: "2022-05-20",
        release_date_precision: "day",
        total_tracks: 5,
        type: "album",
        uri: "spotify:album:5Y8ghgaAGkjSMeVwSHRgK2",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/00YTqRClk82aMchQQpYMd5",
          },
          href: "https://api.spotify.com/v1/artists/00YTqRClk82aMchQQpYMd5",
          id: "00YTqRClk82aMchQQpYMd5",
          name: "Our Last Night",
          type: "artist",
          uri: "spotify:artist:00YTqRClk82aMchQQpYMd5",
        },
      ],
      available_markets: ["AD"],
      disc_number: 1,
      duration_ms: 170710,
      explicit: false,
      external_ids: {
        isrc: "QZHN52217444",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/64oYHrObz3kb3OrFExqlXG",
      },
      href: "https://api.spotify.com/v1/tracks/64oYHrObz3kb3OrFExqlXG",
      id: "64oYHrObz3kb3OrFExqlXG",
      is_local: false,
      name: "Valley of Vision",
      popularity: 40,
      preview_url:
        "https://p.scdn.co/mp3-preview/50840267d6a815b08ab52ef8a7aa4a168b24aeb0?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 2,
      type: "track",
      uri: "spotify:track:64oYHrObz3kb3OrFExqlXG",
    },
    {
      album: {
        album_type: "SINGLE",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/00YTqRClk82aMchQQpYMd5",
            },
            href: "https://api.spotify.com/v1/artists/00YTqRClk82aMchQQpYMd5",
            id: "00YTqRClk82aMchQQpYMd5",
            name: "Our Last Night",
            type: "artist",
            uri: "spotify:artist:00YTqRClk82aMchQQpYMd5",
          },
        ],
        available_markets: ["AD"],
        external_urls: {
          spotify: "https://open.spotify.com/album/5Y8ghgaAGkjSMeVwSHRgK2",
        },
        href: "https://api.spotify.com/v1/albums/5Y8ghgaAGkjSMeVwSHRgK2",
        id: "5Y8ghgaAGkjSMeVwSHRgK2",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273a3b3a0167f27ffa73669162a",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02a3b3a0167f27ffa73669162a",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851a3b3a0167f27ffa73669162a",
            width: 64,
          },
        ],
        name: "Uninstall",
        release_date: "2022-05-20",
        release_date_precision: "day",
        total_tracks: 5,
        type: "album",
        uri: "spotify:album:5Y8ghgaAGkjSMeVwSHRgK2",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/00YTqRClk82aMchQQpYMd5",
          },
          href: "https://api.spotify.com/v1/artists/00YTqRClk82aMchQQpYMd5",
          id: "00YTqRClk82aMchQQpYMd5",
          name: "Our Last Night",
          type: "artist",
          uri: "spotify:artist:00YTqRClk82aMchQQpYMd5",
        },
      ],
      available_markets: ["AD"],
      disc_number: 1,
      duration_ms: 173716,
      explicit: false,
      external_ids: {
        isrc: "QZES82295012",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/1PloF5oRkmI42SRfwN71M0",
      },
      href: "https://api.spotify.com/v1/tracks/1PloF5oRkmI42SRfwN71M0",
      id: "1PloF5oRkmI42SRfwN71M0",
      is_local: false,
      name: "NO HELP",
      popularity: 37,
      preview_url:
        "https://p.scdn.co/mp3-preview/590f263f02d4ca29b9199e2c9b351ade040d6b77?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 3,
      type: "track",
      uri: "spotify:track:1PloF5oRkmI42SRfwN71M0",
    },
  ],
  total: 50,
  limit: 3,
  offset: 0,
  previous: null,
  href: "https://api.spotify.com/v1/me/top/tracks?limit=3&offset=0",
  next: "https://api.spotify.com/v1/me/top/tracks?limit=3&offset=3",
};

const topSongs6Mo = {
  items: [
    {
      album: {
        album_type: "SINGLE",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/00YTqRClk82aMchQQpYMd5",
            },
            href: "https://api.spotify.com/v1/artists/00YTqRClk82aMchQQpYMd5",
            id: "00YTqRClk82aMchQQpYMd5",
            name: "Our Last Night",
            type: "artist",
            uri: "spotify:artist:00YTqRClk82aMchQQpYMd5",
          },
        ],
        available_markets: ["AD"],
        external_urls: {
          spotify: "https://open.spotify.com/album/5Y8ghgaAGkjSMeVwSHRgK2",
        },
        href: "https://api.spotify.com/v1/albums/5Y8ghgaAGkjSMeVwSHRgK2",
        id: "5Y8ghgaAGkjSMeVwSHRgK2",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273a3b3a0167f27ffa73669162a",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02a3b3a0167f27ffa73669162a",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851a3b3a0167f27ffa73669162a",
            width: 64,
          },
        ],
        name: "Uninstall",
        release_date: "2022-05-20",
        release_date_precision: "day",
        total_tracks: 5,
        type: "album",
        uri: "spotify:album:5Y8ghgaAGkjSMeVwSHRgK2",
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/00YTqRClk82aMchQQpYMd5",
          },
          href: "https://api.spotify.com/v1/artists/00YTqRClk82aMchQQpYMd5",
          id: "00YTqRClk82aMchQQpYMd5",
          name: "Our Last Night",
          type: "artist",
          uri: "spotify:artist:00YTqRClk82aMchQQpYMd5",
        },
      ],
      available_markets: ["AD"],
      disc_number: 1,
      duration_ms: 155784,
      explicit: false,
      external_ids: {
        isrc: "QZHN82285125",
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/3j6PTmfO14WXI7LuHnfucf",
      },
      href: "https://api.spotify.com/v1/tracks/3j6PTmfO14WXI7LuHnfucf",
      id: "3j6PTmfO14WXI7LuHnfucf",
      is_local: false,
      name: "Uninstall",
      popularity: 55,
      preview_url:
        "https://p.scdn.co/mp3-preview/691b23a07b9b15bf60721396a91ef22d4af6bdbf?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 1,
      type: "track",
      uri: "spotify:track:3j6PTmfO14WXI7LuHnfucf",
    },
  ],
  total: 50,
  limit: 3,
  offset: 0,
  previous: null,
  href: "https://api.spotify.com/v1/me/top/tracks?limit=3&offset=0",
  next: "https://api.spotify.com/v1/me/top/tracks?limit=3&offset=3",
};

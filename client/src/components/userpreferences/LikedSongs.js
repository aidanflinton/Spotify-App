import React from "react";
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
  return (
    <div className="App">
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
    </div>
  );
};

export default LikedSongs;

const likedSongs = {
  href: "https://api.spotify.com/v1/me/tracks?offset=0&limit=3&locale=en-US,en;q=0.9",
  items: [
    {
      added_at: "2022-05-29T23:16:37Z",
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7iWiAD5LLKyiox2grgfmUT",
              },
              href: "https://api.spotify.com/v1/artists/7iWiAD5LLKyiox2grgfmUT",
              id: "7iWiAD5LLKyiox2grgfmUT",
              name: "Bullet For My Valentine",
              type: "artist",
              uri: "spotify:artist:7iWiAD5LLKyiox2grgfmUT",
            },
          ],
          available_markets: ["AD"],
          external_urls: {
            spotify: "https://open.spotify.com/album/45SbfV6M4ELzAOU163XpPb",
          },
          href: "https://api.spotify.com/v1/albums/45SbfV6M4ELzAOU163XpPb",
          id: "45SbfV6M4ELzAOU163XpPb",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b2731de68bc62755fb41495ba89e",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e021de68bc62755fb41495ba89e",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d000048511de68bc62755fb41495ba89e",
              width: 64,
            },
          ],
          name: "Stitches",
          release_date: "2022-05-27",
          release_date_precision: "day",
          total_tracks: 2,
          type: "album",
          uri: "spotify:album:45SbfV6M4ELzAOU163XpPb",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7iWiAD5LLKyiox2grgfmUT",
            },
            href: "https://api.spotify.com/v1/artists/7iWiAD5LLKyiox2grgfmUT",
            id: "7iWiAD5LLKyiox2grgfmUT",
            name: "Bullet For My Valentine",
            type: "artist",
            uri: "spotify:artist:7iWiAD5LLKyiox2grgfmUT",
          },
        ],
        available_markets: ["AD"],
        disc_number: 1,
        duration_ms: 301426,
        explicit: true,
        external_ids: {
          isrc: "GBUM72105975",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/4KWq6RMruDDwjzYBBpUi7c",
        },
        href: "https://api.spotify.com/v1/tracks/4KWq6RMruDDwjzYBBpUi7c",
        id: "4KWq6RMruDDwjzYBBpUi7c",
        is_local: false,
        name: "Stitches",
        popularity: 51,
        preview_url:
          "https://p.scdn.co/mp3-preview/b13a366165b7e07cb2a94f62766da16d4c5404e3?cid=774b29d4f13844c495f206cafdad9c86",
        track_number: 1,
        type: "track",
        uri: "spotify:track:4KWq6RMruDDwjzYBBpUi7c",
      },
    },
    {
      added_at: "2022-05-29T23:04:11Z",
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/7vxGPhqKXcDxc24Xm9IGpV",
              },
              href: "https://api.spotify.com/v1/artists/7vxGPhqKXcDxc24Xm9IGpV",
              id: "7vxGPhqKXcDxc24Xm9IGpV",
              name: "So It Begins",
              type: "artist",
              uri: "spotify:artist:7vxGPhqKXcDxc24Xm9IGpV",
            },
          ],
          available_markets: ["AD"],
          external_urls: {
            spotify: "https://open.spotify.com/album/6jJHpLpyX9RyggpZqulwIr",
          },
          href: "https://api.spotify.com/v1/albums/6jJHpLpyX9RyggpZqulwIr",
          id: "6jJHpLpyX9RyggpZqulwIr",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273ad8cba811e1763b93c72e4c3",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02ad8cba811e1763b93c72e4c3",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851ad8cba811e1763b93c72e4c3",
              width: 64,
            },
          ],
          name: "Sea of Red",
          release_date: "2022-05-27",
          release_date_precision: "day",
          total_tracks: 1,
          type: "album",
          uri: "spotify:album:6jJHpLpyX9RyggpZqulwIr",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7vxGPhqKXcDxc24Xm9IGpV",
            },
            href: "https://api.spotify.com/v1/artists/7vxGPhqKXcDxc24Xm9IGpV",
            id: "7vxGPhqKXcDxc24Xm9IGpV",
            name: "So It Begins",
            type: "artist",
            uri: "spotify:artist:7vxGPhqKXcDxc24Xm9IGpV",
          },
        ],
        available_markets: ["AD"],
        disc_number: 1,
        duration_ms: 239000,
        explicit: true,
        external_ids: {
          isrc: "usdy42240022",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/1aPLNkO5PFLSLEGBgIpJM7",
        },
        href: "https://api.spotify.com/v1/tracks/1aPLNkO5PFLSLEGBgIpJM7",
        id: "1aPLNkO5PFLSLEGBgIpJM7",
        is_local: false,
        name: "Sea of Red",
        popularity: 30,
        preview_url:
          "https://p.scdn.co/mp3-preview/00351c5720a55ff322c0d7d94902738d240e4f2a?cid=774b29d4f13844c495f206cafdad9c86",
        track_number: 1,
        type: "track",
        uri: "spotify:track:1aPLNkO5PFLSLEGBgIpJM7",
      },
    },
    {
      added_at: "2022-05-29T23:04:10Z",
      track: {
        album: {
          album_type: "single",
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/2OTuoIi28WybVbVcykc237",
              },
              href: "https://api.spotify.com/v1/artists/2OTuoIi28WybVbVcykc237",
              id: "2OTuoIi28WybVbVcykc237",
              name: "Miss May I",
              type: "artist",
              uri: "spotify:artist:2OTuoIi28WybVbVcykc237",
            },
          ],
          available_markets: ["AD"],
          external_urls: {
            spotify: "https://open.spotify.com/album/5xQY16nG5c9tM3xXGgpg4p",
          },
          href: "https://api.spotify.com/v1/albums/5xQY16nG5c9tM3xXGgpg4p",
          id: "5xQY16nG5c9tM3xXGgpg4p",
          images: [
            {
              height: 640,
              url: "https://i.scdn.co/image/ab67616d0000b273665bbc111a638bc1f8b727b2",
              width: 640,
            },
            {
              height: 300,
              url: "https://i.scdn.co/image/ab67616d00001e02665bbc111a638bc1f8b727b2",
              width: 300,
            },
            {
              height: 64,
              url: "https://i.scdn.co/image/ab67616d00004851665bbc111a638bc1f8b727b2",
              width: 64,
            },
          ],
          name: "Bleed Together",
          release_date: "2022-05-25",
          release_date_precision: "day",
          total_tracks: 2,
          type: "album",
          uri: "spotify:album:5xQY16nG5c9tM3xXGgpg4p",
        },
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/2OTuoIi28WybVbVcykc237",
            },
            href: "https://api.spotify.com/v1/artists/2OTuoIi28WybVbVcykc237",
            id: "2OTuoIi28WybVbVcykc237",
            name: "Miss May I",
            type: "artist",
            uri: "spotify:artist:2OTuoIi28WybVbVcykc237",
          },
        ],
        available_markets: ["AD"],
        disc_number: 1,
        duration_ms: 270013,
        explicit: false,
        external_ids: {
          isrc: "DED832100570",
        },
        external_urls: {
          spotify: "https://open.spotify.com/track/42AuCKjh0QFS4dZQv8WURV",
        },
        href: "https://api.spotify.com/v1/tracks/42AuCKjh0QFS4dZQv8WURV",
        id: "42AuCKjh0QFS4dZQv8WURV",
        is_local: false,
        name: "Bleed Together",
        popularity: 48,
        preview_url:
          "https://p.scdn.co/mp3-preview/1e966afa3b943519d33bf40d57dcec799ababa92?cid=774b29d4f13844c495f206cafdad9c86",
        track_number: 1,
        type: "track",
        uri: "spotify:track:42AuCKjh0QFS4dZQv8WURV",
      },
    },
  ],
  limit: 3,
  next: "https://api.spotify.com/v1/me/tracks?offset=3&limit=3&locale=en-US,en;q=0.9",
  offset: 0,
  previous: null,
  total: 224,
};

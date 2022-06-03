import React, { useRef, useEffect, useState, useContext } from "react";
import { green } from "@mui/material/colors";
import {
  Button,
  Table,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  Switch,
  Typography,
  CardContent,
  Card,
  Collapse,
  CardHeader,
  CardActions,
  Tooltip,
  IconButton,
  Avatar,
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { Helmet } from "react-helmet";
import { AccessTokenContext } from "../../contexts/accessTokenContext";

function UserProfile() {
  const [info, setInfo] = useState([]);
  const [dispName, setDispName] = useState(null);
  const { accessToken } = useContext(AccessTokenContext);

  const [topSongs, setTopSongs] = useState();

  const valueRef = useRef("");

  const getUsers = (dataName) => {
    axios
      .get("http://localhost:9000/spotify/users")
      .then((res) => res.data)
      //.then((users) => console.log(users))
      .then((users) =>
        users.forEach((user) => {
          if (user.spotUsername === dataName) {
            setDispName(user.username);
          }
        })
      )
      .then(dispName === null ? null : setDispName(dataName))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    //fetch person info
    fetch("http://localhost:9000/spotify/me?token=" + accessToken)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo(data);
      })
      .then(getUsers(info.display_name))
      .then(
        fetch(
          "http://localhost:9000/spotify/top-tracks?token=" +
            accessToken +
            "&timeRange=short_term"
        )
          .then((res) => res.json())
          .then((data) => {
            setTopSongs(data);
          })
      );
  }, [accessToken, info.display_name]);

  const handleSwitch = () => {
    console.log("toggled");
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    setDispName(valueRef.current.value);
    console.log(dispName);
    setOpen(false);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>

      {dispName && (
        <Card sx={{ minWidth: 275, maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                {dispName.substring(0, 1)}
              </Avatar>
            }
            title={"Username: " + dispName}
          />
          <CardActions disableSpacing>
            <Tooltip title="Edit Username">
              <IconButton onClick={() => handleClickOpen()} aria-label="share">
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Typography>Private</Typography>
            <IOSSwitch
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
              onClick={() => handleSwitch()}
            />
            <Typography>Public </Typography>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Songs/Artists they like</Typography>
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
                        topSongs.items.slice(0, 3).map((song) => (
                          <TableRow
                            key={song.name}
                            sx={{
                              "&:last-child td, &:last-childth": { border: 0 },
                            }}
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
            </CardContent>
          </Collapse>
        </Card>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change Username</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter what you would like your new username to be
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="email"
            fullWidth
            variant="standard"
            inputRef={valueRef}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEdit}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UserProfile;

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

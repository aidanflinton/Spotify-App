import React, {UseState, UseEffect} from 'react'
import { Button, Stack, TextField } from '@mui/material';
import axios from "axios";

function UserCard(props) {
    const username = props;
    const [profile, setProfile] = UseState();

    const getProfile = () => {
        UseEffect(() => {
            let subUsers = [];
            axios.get("http://localhost:9000/users/" + username)
            .then((res) => {
              console.log(res.data);
              // console.log(typeof res.data);
              if (res.data.isPublic) {
                  setProfile({user_id: res.data.user_id, username: res.data.username, password: res.data.password});
              }
            //   res.data.forEach((user) => {
            //     subUsers.push({user_id: user.user_id, is_public: user.isPublic})
            //   })
            //   //console.log(subUsers);
            //   subUsers = subUsers.filter((user) => user.is_public);
            //   //console.log(subUsers);
            //   setUsers(subUsers.map((user) => user.user_id).join("\n\n"));
            //   // console.log(users);
            //   // console.log(users? users : "null");
            })
            .catch((err) => console.log(err))
          }, []);
    }

    return (
        <div className = "element">
            {username}
            <Button variant="contained" onClick={() => getProfile()}>Get</Button>
            {profile}
        </div>
    )
}

export default UserCard;
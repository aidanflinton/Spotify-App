import React, {useState, useEffect} from 'react'
import { Button, Stack, TextField } from '@mui/material';
import axios from "axios";

function UserCard(props) {
    const username = props.username;
    return (
        <div className = "element">
            {username}
            {/* <Button variant="contained">Get</Button> */}
        </div>
    )
}

export default UserCard;
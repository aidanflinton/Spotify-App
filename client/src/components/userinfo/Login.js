import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState, useRef } from "react";

import LoginResults from './LoginResults.js';
import '../../App.css'

function Login(props) {

  const [usr, setUsr] = useState(null);
    const [pass, setPass] = useState(null);

    const textFieldRef1 = useRef();
    const textFieldRef2 = useRef();

    const handleClick = (param1, param2) => {
        setUsr(param1);
        setPass(param2);
    }

    return(
    <>
        <div>
        <Stack spacing={2}>
            <TextField id="username" label="Username" type="search" color="success" inputRef={textFieldRef1} size="small"/>
            <TextField id="password" label="Password" type="search" color="success" inputRef={textFieldRef2} size="small"/>
            <Button variant="contained" size="medium" color="success" onClick={() => handleClick(textFieldRef1.current.value, textFieldRef2.current.value)}>Submit</Button>
        </Stack>  
            {usr && pass && <LoginResults logIn={props.logIn} user={usr} pass={pass}/>} 
        </div>
    </>
    );
}

export default Login
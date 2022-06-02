import React from 'react'
import {useState, useEffect, useRef} from "react"
import axios from "axios"
import { Outlet, Link, Routes, Route } from "react-router-dom";
import {Grid} from "@mui/material";
import firstimage from './firstimage.jpg';
import popimg from './Popimg.JPG'
import rapimg from './Rappic.JPG'
import poppic from './Poppic.JPG'
import rappic from './Rappic.JPG'
import countrypic from './Countrypic.JPG'
import Helmet from "react-helmet"

function Forum() {

  return (
    <div>
      <div><Helmet><title>Forum</title></Helmet></div>
      <div>Forum</div>
      <div>
      <h1>Select Forum</h1>
    
      </div>

      <div>
      <Grid container spacing={0}>
        <Grid item style={{ padding: "30px" }}>
        <Link to="/PopForum"><img width={"90%"} src={poppic} alt="The first image" /></Link>
        </Grid>
        <Grid item style={{ padding: "30px" }}>
        <Link to="/RapForum"><img width={"90%"} src={rappic} alt="The first image" /></Link>
        </Grid>
        <Grid item style={{ padding: "30px" }}>
        <Link to="/CountryForum"><img width={"89%"} src={countrypic} alt="The first image" /></Link>
        </Grid>
      </Grid>

      </div>


      
    </div>

  )
}

export default Forum
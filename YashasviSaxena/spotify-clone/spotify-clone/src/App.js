import './App.css';
import React, { useEffect, useState } from "react";
import Login from './Login';
import {getTokenFromUrl} from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
const spotify= new SpotifyWebApi();
function App() {
  const[token,setToken]=useState(null);

  useEffect(()=>{
    const hash=getTokenFromUrl();
    window.location.hash="";
    const token=hash.access_token;
    if(token){
      setToken(token);
      spotify .setAccessToken(token);
      spotify.getMe().then(user=>{
        console.log('🧑‍🦱',user);
      })
    }

  },[]);
  return (
    <div className="App">
      {
        token ? (<Player />):
        (<Login />)
      }
    </div>
  );
}

export default App;

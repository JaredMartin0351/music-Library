import './app.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongList from './components/songlist/SongList';
import NavBar from './components/navbar/NavBar';
import MusicTable from './components/musictable/MusicTable';





export default function App() {


  const [songs, setSongs] = useState([]);


  useEffect(() => {
    getAllSongs()
  },[]);


  async function getAllSongs() {
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    setSongs(response.data);
  }
  return (
    <div className='App'>
      <NavBar/>
      <MusicTable songs={songs}/>
      <SongList songs = {songs}/>
    </div>
  )
}


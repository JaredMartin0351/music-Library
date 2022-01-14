import './app.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongList from './components/songlist/SongList';
import Filter from './components/filter/Filter';
import MusicTable from './components/musictable/MusicTable';








export default function App() {


  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState([]);


  useEffect(() => {
    getAllSongs()
  },[]);


  async function getAllSongs() {
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    setSongs(response.data);
  }

  function searchSong(searchTerm){
    if (searchTerm.includes(songs.title)){
      setSearch(songs)
      console.log(songs)
    }
  }
  return (
    <div className='App'>
    
      <Filter searchSong={searchSong}/>
      <MusicTable songs={songs}/>
      <SongList songs = {songs}/>
    
    </div>
  )
}


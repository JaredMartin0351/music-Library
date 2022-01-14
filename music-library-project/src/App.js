import './app.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongList from './components/songlist/SongList';
// import Filter from './components/filter/Filter';
import MusicTable from './components/musictable/MusicTable';
import Search from './components/search/Search';







export default function App() {


  const [songs, setSongs] = useState([]);


  useEffect(() => {
    getAllSongs()
  },[]);


  function filterSongs(song){
    let foundSongs = songs.filter(function(searchTerm){
      if(searchTerm ===''){
        return foundSongs
      }
      else if (song.title.toLowerCase().includes(searchTerm.toLowerCase())){
        return true
      }
    })
    return foundSongs
  }


  async function getAllSongs() {
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    setSongs(response.data);
  }
  return (
    <div className='App'>
      {/* <Filter/> */}
      <Search filterSongs={filterSongs}/>
      <MusicTable songs={songs}/>
      <SongList songs = {songs}/>
    </div>
  )
}


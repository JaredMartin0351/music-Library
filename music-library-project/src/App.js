import './app.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongList from './components/songlist/SongList';
// import Filter from './components/filter/Filter';
import MusicTable from './components/musictable/MusicTable';

require('es6-promise').polyfill();
require('isomorphic-fetch');






export default function App() {


  const [songs, setSongs] = useState([]);
  const [q, setQ] = useState("");
  
 


  useEffect(() => {
    getAllSongs()
  },[]);


  async function getAllSongs() {
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    setSongs(response.data);
  }

  function search(props) {
    return props.filter(
      (prop) =>
        prop.title.toLowerCase().indexOf(q) > -1 ||
        prop.album.toLowerCase().indexOf(q) > -1 ||
        prop.artist.toLowerCase().indexOf(q) > -1 ||
        prop.genre.toLowerCase().indexOf(q) > -1 
    );
  }

  

  return (
    <div className='App'>
      <div>
      <input type="text" value={q} onChange={(e) => setQ(e.target.value)}/>
      </div>
      <MusicTable songs={search(songs)}/>
      <SongList songs = {songs}/>
    
    </div>
  )
}


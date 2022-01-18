import './app.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongForm from './components/createsong/CreateSong';
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
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data);
  }

  async function createSong(newSong){

    let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    if(response.status === 201){
      getAllSongs();
    }
  }

  async function updateSong(pk,updatedSong){
  
    let response = await axios.put(`http://127.0.0.1:8000/music/${pk}/`, updatedSong)
    if(response.status ===200){
      getAllSongs();
    }
  }

  async function deleteSong(pk){
  
    let response = await axios.delete(`http://127.0.0.1:8000/music/${pk}/`)
    if(response.status ===204){
      getAllSongs();
    }
  }

 

  function search(props) {
    return props.filter(
      (prop) =>
        prop.title.toLowerCase().indexOf(q) > -1 ||
        prop.album.toLowerCase().indexOf(q) > -1 ||
        prop.artist.toLowerCase().indexOf(q) > -1 ||
        prop.genre.toLowerCase().indexOf(q) > -1 ||
        prop.release_date.toString().toLowerCase().indexOf(q) > -1 
    );
  }

  
  

  

  return (
    <div className='App'>
      <div className='inputbox'>
      <input type="text" placeholder='Filter' value={q} onChange={(e) => setQ(e.target.value)}/>
      </div>
      <MusicTable songs={search(songs)} updateSong={updateSong} deleteSong={deleteSong}/>
      <SongForm createSong={createSong}/>
    </div>
  )
}


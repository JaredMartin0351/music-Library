import './app.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongForm from './components/createsong/CreateSong';
import MusicTable from './components/musictable/MusicTable';
import UpdateForm from './components/updatesong/UpdateSong';



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
      await getAllSongs();
    }
  }

  async function updateSong(pk,newSong){

    let response = await axios.put('http://127.0.0.1:8000/music/', pk, newSong)
    if(response.status ===200){
      await getAllSongs();
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
      <MusicTable songs={search(songs)}/>
      <SongForm createSong={createSong}/>
    
    </div>
  )
}


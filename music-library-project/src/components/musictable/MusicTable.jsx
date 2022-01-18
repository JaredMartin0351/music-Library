import React from 'react';
import './musicTable.css';
import { useState } from "react";
import UpdateSong from "../updatesong/UpdateSong";




export default function MusicTable(props) {
    
    const [edit,setEdit] = useState(false)
    const [song,setSong] = useState('')

     const showEdit =(songToUpdate)=>{
        setSong(songToUpdate)
        setEdit(true)
    }
    


    
  

    return (
        <>
        <div className="table-container">
            <table className="table table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Album</th>
                    <th scope="col">Artist</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map((song) => {
                        return(
                        <tr key={song.id}>
                            <td>
                                {song.title}
                            </td>
                            <td>
                                {song.album}
                            </td>
                            <td>
                                {song.artist}
                            </td>
                            <td>
                                {song.genre}
                            </td>
                            <td>
                                {song.release_date}
                            </td>
                            <td>
                                <div className='updatebutton'>
                                    <button type="submit" className="btn btn-warning" onClick={()=>showEdit(song)}>Update</button>
                                </div>
                                <div className='deletebutton'>
                                    <button type="submit" className="btn btn-danger" onClick={() =>props.deleteSong(song.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        );
                        })}
                </tbody>
            </table>
            {edit && <UpdateSong updateSong={props.updateSong} song = {song}/>}
            
        </div>
        </>
    )
}

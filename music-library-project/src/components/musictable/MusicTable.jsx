import React from 'react';
import './musicTable.css';
import UpdateForm from "../updatesong/UpdateSong";



export default function MusicTable(props) {

  

    return (
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
                                <div className='deletebutton'>
                                    <button type="submit" className="btn btn-danger" >Delete</button>
                                </div>
                                <div className='editbutton'>
                                    <button type="submit" className="btn btn-warning" onClick={UpdateForm}>Edit</button>
                                </div>
                               
                            </td>
                        </tr>
                        );
                        })}
                </tbody>
            </table>
        </div>
    )
}

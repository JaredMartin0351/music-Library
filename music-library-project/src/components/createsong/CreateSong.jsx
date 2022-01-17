import React, {useState} from "react";
import './createSong.css';







export default function SongForm (props) {
    
   

        const [title, setTitle] = useState('');
        const [album, setAlbum] = useState('');
        const [artist, setArtist] = useState('');
        const [genre, setGenre] = useState('');
        const [releaseDate, setReleaseDate] = useState('');
    
        function handleSubmit(formEvent){
            formEvent.preventDefault();
            let newSong = {
                title: title,
                album: album,
                artist: artist,
                genre: genre,
                release_date: releaseDate,
    
            }
            props.createSong(newSong);
        }
  

    return (
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col">
                <input type="text" className="title" required='required' placeholder="Title" onChange={(event) => setTitle(event.target.value)} value={title} aria-label="Title"/>
            </div>
            <div className="col">
                <input type="text" className="album" required='required' placeholder="Album" onChange={(event) => setAlbum(event.target.value)} value={album} aria-label="Album"/>
            </div>
            <div className="col">
                <input type="text" className="artist" required='required' placeholder="Artist" onChange={(event) => setArtist(event.target.value)} value={artist} aria-label="Artist"/>
            </div>
            <div className="col">
                <input type="text" className="genre" required='required' placeholder="Genre" onChange={(event) => setGenre(event.target.value)} value={genre} aria-label="Genre"/>
            </div>
            <div className="col">
                <input type="date" className="release_date" required='required' placeholder="Release Date - YEAR-M-D" onChange={(event) => setReleaseDate(event.target.value)} value={releaseDate} aria-label="Release Date"/>
            </div>
            <div className='addbutton'>
                <button type="submit" className="btn btn-success">Add Song</button>
            </div>
        </div>
        </form>
    )
};


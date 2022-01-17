import React, {useState} from "react";
import './updateSong.css';







export default function UpdateForm (props) {

    const [title, setTitle] = useState('');
    const [album, setAlbum] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        let newSong = {
            title: title,
            album: album,
            artist: artist,
            genre: genre,
            release_date: releaseDate,

        }
        props.updateSong(newSong);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='text' onChange={(e) => setTitle(e.target.value)} value={title}/>
            <label>Album</label>
            <input type='text' onChange={(e) => setAlbum(e.target.value)} value={album}/>
            <label>Artist</label>
            <input type='text' onChange={(e) => setArtist(e.target.value)} value={artist}/>
            <label>Genre</label>
            <input type='text' onChange={(e) => setGenre(e.target.value)} value={genre}/>
            <label>Release Date</label>
            <input type='date' onChange={(e) => setReleaseDate(e.target.value)} value={releaseDate}/>
            <button type='submit'>Edit</button>
        </form>
    );
}


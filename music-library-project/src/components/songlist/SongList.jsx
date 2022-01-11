import React from 'react';
import './songList.css';





const SongList = (props) => {
    console.log(props)

    let mappedSongs = props.songs.map(song => {
        return <li key={song.id}>{song.title}</li>
    })

    return (
        <div>
            {mappedSongs}
        </div>
    )
};

export default SongList; 
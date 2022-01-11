import React from 'react';
import './songList.css';




const SongList = (props) => {
    console.log(props.songs)

    let mappedSongs = props.songs.map(id => {
        return <li>{id.title}</li>
    })

    return (
        <div>
            {mappedSongs}
        </div>
    )
};

export default SongList; 
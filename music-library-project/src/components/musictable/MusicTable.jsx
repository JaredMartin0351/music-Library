import './musicTable.css';

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
                        </tr>
                        );
                        })}
                </tbody>
            </table>
        </div>
    )
}

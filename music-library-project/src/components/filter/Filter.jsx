import React, { useState } from 'react';
import "./filter.css"


function Filter(props) {
    console.log(props)
    const [searchValue, setSearchValue] = useState("")
    console.log(searchValue)


    const handleSubmit = (e) => {
        setSearchValue(e.target.value)
        e.preventDefault();
        console.log(e)
    }




  
    return (
        <div className="Filter">
            <div>
                <form onSubmit={handleSubmit} className='form-grid'>
                    <label>Search filtering</label>
                        <input
                            type="text"
                            name="search"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                </form>
            </div>
            <ul>
            {props.songs.map((song) => {
            return <li key={song.id}>{song.searchValue} </li>
            })}
            </ul>
        </div>
    );
  }
  
  export default Filter;




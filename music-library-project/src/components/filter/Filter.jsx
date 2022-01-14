import React, { useState } from 'react';
import "./filter.css"




const Filter = (props) => {
    
    const [searchTerm, setSearchTerm] = useState(' ')

    const handleSubmit = (searchTerm) => {
        searchTerm.preventDefault();
        props.searchSong(searchTerm)
    }

    const handleChange = (searchTerm) => {
        setSearchTerm(searchTerm.target.value)
    }
    
    return ( 
        <div className='homeButton'>
            <form onSubmit={handleSubmit} className='form-grid'>
                <div className='form-group'>
                    <label>Search</label>
                    <input type="searchTerm" value={searchTerm} name="searchTerm" className="form-control form-control-sm" onChange={handleChange} />
                </div>
            </form>
        </div>
     );
}
 
export default Filter;





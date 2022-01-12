import React from 'react';




export default function Filter() {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Filter
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Title</a></li>
                <li><a className="dropdown-item" href="#">Album</a></li>
                <li><a className="dropdown-item" href="#">Artist</a></li>
                <li><a className="dropdown-item" href="#">Genre</a></li>
            </ul>
        </div> 
)}






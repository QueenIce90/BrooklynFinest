import React from "react";

function LocationList ({brooklyns, handleDelete}) {
    return ( 
        <div className="location" >
        <h2>{brooklyns.name}</h2>
        <img src= {brooklyns.image} />
        <h3>{brooklyns.location}</h3>
        <h4>Hours Of Operation : {brooklyns.Hours}</h4>
        <button onClick={()=>{handleDelete(brooklyns.id)}}>Delete</button>
        </div>
    )
}

export default LocationList;
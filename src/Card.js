import React from "react";
import "./Card.css"

function Card(props){
return(
    <div className="Card">
    <img src={'https://robohash.org/${props.id}?set=set2&size=180x180'}/>
    <h1>{props.name}</h1>
    </div>
)
}

export default Card
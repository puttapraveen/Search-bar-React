import React from "react"
import "./Cards.css"

function Cards(props){
return(
    <div className="cards-list">
        <img src={'https://robohash.org/${props.id}?set=set2&size=180x180'}/>
        <h1>{props.name}</h1>
        <h2>{props.id}</h2>
    </div>
)

}
export default Cards
import React from "react"
import "./Cards.css"
import Card from "./Card.js"

function Cards(props){
return(
    <div className="cardsss">
    {props.monsters.map(monster=>(
    <div className="cards-list">
        <Card key={monster.id} name={monster.name} />
        </div>
        ))}
    </div>
)

}
export default Cards
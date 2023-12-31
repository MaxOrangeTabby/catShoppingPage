import React from "react"

export default function CatCard(props){
    return(
        <div className = "cat-card">
            <img className = "cat-card-img" src = {props.img}></img>
            <div className = "cat-card-info">
                <p>Color: {props.color}</p>
                <p>Quantity: {props.count}</p>
                <p>Price: ${props.price}</p>
            </div>
            
        </div>
    )
}
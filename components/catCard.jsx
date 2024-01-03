import React from "react"

export default function CatCard(props){
    return(
        <div className = "cat-card">
            <div className = "cat-card-top">
                <img className = "cat-card-img" src = {props.img}></img>
                <div className = "cat-card-info">
                    <p>Color: {props.color}</p>
                    <p>Quantity: {props.count}</p>
                    <p>Price: ${props.price}</p>
                </div>
            </div>
            <button className = "add-cart-btn" onClick = {props.handleClick}>Add To Cart</button>
            <button className = "buy-btn">Buy Now</button>
        </div>
    )
}
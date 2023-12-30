import React from "react"
import CatCard from "../components/catCard.jsx"
import {Link} from "react-router-dom"
import catCardInfo from "../components/catCardInfo.jsx"

export default function ShoppingPage(){
    const catCards = catCardInfo.map(function(card){
        return(
            <CatCard
                img = {card.img}
                color = {card.count}
                count = {card.count}
                price = {card.price}
            
            />
        )
    })

    return(
    <div>
        <div className = "shopping-page-header">
            <Link to = "/">
                <button className = "shopping-page-back-btn" type = "button">Back</button>
            </Link>
            <h1 className = "shopping-page-title">Shopping Page</h1>
            <img className = "shopping-cart-logo" src = "./images/shoppingCart.png" />
        </div>
        <div className = "shopping-page-header-caption">
            <p>5% OFF ALL ORDERS OVER $99,999</p>
        </div>
        <div className = "shopping-page-body">
            <div className = "cat-cards">
                {catCards}
            </div>
        </div>
    </div>
    )
}
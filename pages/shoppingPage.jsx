import React from "react"
import CatCard from "../components/catCard.jsx"
import {Link} from "react-router-dom"
import catCardInfo from "../components/catCardInfo.jsx"

export default function ShoppingPage(){

    const [cartAmt, setCartAmt] = React.useState(0)

    function addCart(){
        setCartAmt(prevAmt => prevAmt + 1)
    }

    const catCards = catCardInfo.map(function(card){
        return(
            <CatCard
                img = {card.img}
                color = {card.color}
                count = {card.count}
                price = {card.price}
                handleClick = {addCart}
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
            <div className = "shopping-page-cart">
                <button className = "login-btn">Log In/Sign Up</button>
                <img className = "shopping-cart-logo" src = "./images/shoppingCart.png" />
                <p className = "shopping-cart-amt">{cartAmt}</p>
            </div>
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
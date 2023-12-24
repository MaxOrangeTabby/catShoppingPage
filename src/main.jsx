import React from "react"
import cat1 from "/images/staringOrangeCat.png"
import cat2 from "/images/violentOrangeCat.jpg"
import cat3 from "/images/wackyOrangeCat.jpg"
import texasPic from "/images/texas.png"
import airplane from "/images/airplane.png"
import moneySymbol from "/images/moneySymbol.png"


export default function Main(){
    return(
        <div className = "main-page">
            <div className = "top-section">
                <div className = "top-section-txt">
                    <p>Our Collection of Orange Cats has No Bounds</p>
                    <p>Explore our varieties below</p>
                </div>
            </div>
            <div className = "mid-section">
                <div className = "mid-section-imgs">
                    <img src = {texasPic}/>
                    <img src = {airplane}/>
                    <img src = {moneySymbol}/>
                </div>
                <div className = "mid-section-caption">
                    <div>
                        <h1 className = "texas-caption">Locally Sourced in Texas</h1>
                        <p className = "texas-desc">All of our cats are from Texas, which means they know what great BBQ taste like. An important trait in a cat. </p>
                    </div>
                    <div>
                        <h1 className = "airplane-caption">Fast Delivery Times</h1>
                        <p className = "airplane-desc">We guarantee our delivery times will be from 6-12 years, or get 1% of your money back.</p>
                    </div>
                    <div>
                        <h1 className = "moneySymbol-caption">Premium Price</h1>
                        <p className = "moneySymbol-desc">Everything is bigger in Texas, including our prices. Due to the luxurious aspects of orange cats, we charge a minimum of $7777. Prices vary based on specific breed.</p>
                    </div>
                </div>
            </div>
            <div className ="example-cats">
                <div className = "example-cats-pics">
                    <img src = {cat1}/>
                    <img src = {cat2}/>
                    <img src = {cat3}/>
                </div>
                <div className = "example-cats-options">
                    <div className = "example-cats-buttons">
                        <div className = "example-cats-buttons1">
                            <button className = "example-cats-buttons-upper">Purchase Cat</button>
                            <button className = "example-cats-buttons-lower">More Info</button>
                        </div>
                        <div className = "example-cats-buttons2">
                            <button className = "example-cats-buttons-upper">Purchase Cat</button>
                            <button className = "example-cats-buttons-lower">More Info</button>
                        </div>
                        <div className = "example-cats-buttons3">
                            <button className = "example-cats-buttons-upper">Purchase Cat</button>
                            <button className = "example-cats-buttons-lower">More Info</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
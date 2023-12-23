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
                <div className = "mid-section-caption"></div>
            </div>
            <div className ="example-cats">
                    <img src = {cat1}/>
                    <img src = {cat2}/>
                    <img src = {cat3}/>
            </div>
        </div>

    )
}
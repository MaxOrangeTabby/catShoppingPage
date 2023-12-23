import React from "react"
import cat1 from "/images/staringOrangeCat.png"
import cat2 from "/images/violentOrangeCat.jpg"
import cat3 from "/images/wackyOrangeCat.jpg"


export default function Main(){
    return(
        <div className = "main-page">
            <div className = "top-section">
                <div className = "top-section-txt">
                    <p>Our Collection of Orange Cats has No Bounds</p>
                    <p>Explore our varieties below</p>
                </div>
            </div>
            <div className = "mid-section"></div>
            <div className ="example-cats">
                    <img src = {cat1}/>
                    <img src = {cat2}/>
                    <img src = {cat3}/>
            </div>
        </div>

    )
}
import React from "react"

export default function CatCard(props){
    return(
        <div className = "cat-card">
            <img className = "cat-card-img" src = {props.img}></img>
            <div className = "cat-card-info"></div>
        </div>
    )
}
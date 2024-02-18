import React from "react";

export default function List(props){
    return(
        <div className="list-item">
            <img src={`./images/${props.item.img}`} alt="" className="location--img"></img>
            <div className="text">
                <div className="head">
                    <img src="../images/loc.jpg" alt="" ></img>
                    <div className="location">{props.item.country}</div>
                    <a href={`${props.item.link}`} target="a_blank" >View on Google Maps</a>
                </div>
                <h2>{props.item.loc}</h2>
                <p>{props.item.description}</p>
            </div>
        </div> 
   
    )
}
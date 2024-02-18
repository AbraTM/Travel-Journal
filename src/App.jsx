import React from "react";
import Navbar from "./navbar";
import List from "./list";
import data from "./data";

console.log(data)

export default function App(){
    let spots = data.map((item) => {
        return(
            <List 
                key = {item.id}
                item = {item}
            />
        )
    })

    return(
        <div>
            <Navbar />
            <section className="list">
                {spots}
            </section>
        </div>
    )
}
import React from "react";
import Nav from './Nav'
import Card from './Card'
import Data from '../Data'

export default function App(){
    const displayCard = Data.map((item)=>{
        return <Card 
            key = {item.title}
            {...item}
        />
    })

    return (
        <>
            <Nav/>
            {displayCard}
        </>
    )
}
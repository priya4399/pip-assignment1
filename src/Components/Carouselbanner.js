import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Carouselbanner(props)
{
    var items = [
        {
            name: "WomensT20I",
            description: "Pakistan Women vs Sri Lanka Women",
            Date :"2022-11-30T00:00:00.000Z",
            image:"images/cricket1.jfif"
            
        },
        {
            name: "First-class",
            description: "England Women vs Australia Women",
            Date :"2023-05-27T00:00:00.000Z",
            image:"images/cricket1.jfif"
            
        }, 
        {
            name: "First-class",
            description: "Canterbury vs Central Districts",
            Date :"2023-04-28T00:00:00.000Z",
            image:"images/cricket1.jfif"
            
        },
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <p>{props.item.date}</p>
            {/* <p>{props.item.image}</p> */}
        </Paper>
    );
};
export default Carouselbanner;
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Events from '../events.json';
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { Paper, Button } from '@mui/material'
import { Paper} from '@mui/material'

const filteredBanner = Events.filter(d => d.status== 'In-Progress');

function Carouselbanner(props)
{
    // const [events, setEvents] = useState([]);

    // useEffect(()=>{
    //     axios.get('../events.json')
    //     .then(response => {
    //         console.log(response)
    //         setEvents(response.data)
    //     })
    // })

    // filteredBanner && filteredBanner.map(item => {
    
    return (
        <Carousel>
            {
                filteredBanner.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )

// })
}

function Item(props)
{
    return (
        <div className='Carousel'>
        <Paper style={{ height:250,width:'100%', backgroundImage: `url(${props.item.image})`, backgroundRepeat: "no-repeat"}}>

           <h1> {props.item.title} </h1>
            <p>{props.item.description}</p>
            <p>{props.item.event_date_time}</p>
    
        </Paper>
        </div>
    );
};
export default Carouselbanner;
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Events from '../events.json';
import { Paper} from '@mui/material'

const filteredBanner = Events.filter(d => d.status=== 'In-Progress');

function Carouselbanner(props)
{  
    return (
        <Carousel>
            {
                filteredBanner.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        // <div className='Carousel'>
        <Paper style={{ height:200, backgroundImage: `url(${props.item.image})`, backgroundRepeat: "no-repeat",backgroundPositionX:"center",backgroundPositionY:"center",textAlign:"center",color:"white",backgroundSize:"100%"}}>
        <div className='Carousel'>

           <h1> {props.item.title} </h1>
            <p>{props.item.description}</p>
            <p>{props.item.event_date_time}</p>
            </div>
        </Paper>
        
    );
};
export default Carouselbanner;
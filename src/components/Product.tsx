import React from 'react';
import '../App.css';
import {Button} from 'react-bootstrap';


const Product = (props:any) => {
    console.log(props);
    return (  
        <div className="card">
            <div className="container">
                <p>{props.item.topic_name}</p>
                <p>{props.item.topic_data}</p>
            </div>
            <Button className="button" >Update</Button>
            <Button className="button">Delete</Button>
        </div>
    )
}

export default Product

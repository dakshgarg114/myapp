import { render } from '@testing-library/react';
import React,{useEffect} from 'react';
import {Button} from 'react-bootstrap';
import { isBindingName } from 'typescript';
import '../App.css';
import Product from './Product';



function Post(props:any) {
    const array = props.array;
    array.reverse();
    console.log(array);
    return(
        
        <main>
       
        {array.map((item:any) => (
            <Product item={item} />
            //<Product post={item} />
        ))}
        </main>
    );
    
}

export default Post

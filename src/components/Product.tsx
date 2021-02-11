import React, {useState} from 'react';
import '../App.css';
import {Button} from 'react-bootstrap';

import {gql} from '@apollo/client';
import {ApolloClient, HttpLink,InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://mypostapp114.herokuapp.com/v1/graphql',
  }),
});

function refreshPage() {
    window.location.reload(false);
    }

const delete_post = (ID:any) =>{
    const Delete_post_data = gql`
    mutation post_data( $Id : Int!){
        delete_post_data(where: {Id: {_eq:$Id}}) {
          affected_rows
        }
      }
    `
    ;
    client.mutate({
        mutation: Delete_post_data,
        variables:{Id:ID}
        }
    )
    refreshPage();   
}

const update_post = (props:any) =>{
    const Modify_last_unsave_data =gql`
    mutation last_unsaved_data($a: String!, $b: String!) {
    update_last_unsaved_data(_set: {last_topic_data: $a, last_topic_name: $b}, where: {index: {_eq: "1"}}) {
        affected_rows
    }
    }
    `
    client.mutate({
        mutation: Modify_last_unsave_data,
        variables:{a:props.item.topic_data,b:props.item.topic_name}
      })
    delete_post(props.item.Id);
}
const Product = (props:any) => {
    return (  
        <div className="card">
            <div className="container">
                <p>{props.item.topic_name}</p>
                <p>{props.item.topic_data}</p>
            </div>
            <Button className="button1"  onClick={()=>update_post(props)}>Update</Button>
            <Button className="button2" onClick={()=> delete_post(props.item.Id)}>Delete</Button>
        </div>
    )
}
export default Product

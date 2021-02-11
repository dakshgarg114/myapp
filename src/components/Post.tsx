import React from 'react';
import '../App.css';
import Product from './Product';

import {useQuery,gql} from '@apollo/client';
const backend_data = gql`
{
    post_data(order_by: {Id: desc}) {
      Id
      topic_data
      topic_name
    }
  }
  
`;


function Post() {
    const {loading,error,data} = useQuery(backend_data);
    if(loading) return <p>Loading</p>
    if(error) return <p>Error :</p>;
    return data["post_data"].map((item:any,idx:any) =>{
        return(
        <div>
            <p>
                <Product item={item}/>
             </p>
        </div>
        )
    });
    
}

export default Post

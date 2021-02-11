import React,{useState} from 'react';
import {Button} from 'react-bootstrap';
import '../App.css';
import {ApolloProvider, gql, useMutation, useQuery} from '@apollo/client';
import {ApolloClient, HttpLink,InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://mypostapp114.herokuapp.com/v1/graphql',
  }),
});


const Insert_post_data = gql`
  mutation post_data($topic_name: String!, $topic_data: String!) {
  insert_post_data(objects: {topic_name: $topic_name, topic_data: $topic_data}) {
    affected_rows
  }
}

`
;

const Last_unsaved_data = gql`
{
    last_unsaved_data {
      last_topic_data
      last_topic_name
    }
  }
  
`;
const Modify_last_unsave_data =gql`
mutation last_unsaved_data($a: String!, $b: String!) {
  update_last_unsaved_data(_set: {last_topic_data: $a, last_topic_name: $b}, where: {index: {_eq: "1"}}) {
    affected_rows
  }
}

`
function NewPost() {
    const {data} = useQuery(Last_unsaved_data);
    function refreshPage() {
      window.location.reload(false);
    }
    const onSubmit = () =>{
      client.mutate({
        mutation: Insert_post_data,
        variables:{topic_name:name,topic_data:description}
      })
      client.mutate({
        mutation: Modify_last_unsave_data,
        variables:{a:"",b:""}
      })

      refreshPage();   
    }
  const [name,setName] = useState("");
  const [description,setdescription] = useState("");
  const [flag,setFlag] = useState(0);
  const setdata=()=>{
    
    data && data["last_unsaved_data"] && data["last_unsaved_data"].map((item:any,idx:any)=>{
      if(idx==0){
      setName(item.last_topic_name);
      setdescription(item.last_topic_data);
      setFlag(1);
      }
    })
  }
  if(flag==0)setdata();

    return (
      <div className="card">
      <form action="#">
        <p>Topic </p>
        <input className="topic" type="text" placeholder="Topic" onChange={(e) => setName(e.target.value)} value={name} />
        <p>Description</p>
        <input className="topic" type="text" placeholder="Description" id="description" onChange={(e)=> setdescription(e.target.value)} value={description} />
        <br />
        <Button className="button1" onClick={onSubmit}>Post</Button>
      </form>
      </div>
    );

}


export default NewPost

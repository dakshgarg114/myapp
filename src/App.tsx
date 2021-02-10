import React, {useState} from 'react';
import './App.css';
import Post from './components/Post';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
let array=[
  {topic_name: 'Akshat Goyal', topic_data:'Good boy '},
  {topic_name: 'Daksh Garg', topic_data:'Bad Boy'},
];

function App() {
  
  const [name,setName] = useState("");
  const [description,setdescription] = useState("");

  function refreshPage() {
  window.location.reload(false);
  }
 const onSubmit = () =>{
    let obj={
        topic_name:name,
        topic_data:description
    }
    array.push(obj);
    refreshPage();   
  }
  
  return (
    <div>
    
    <div className="card">
    <form action="#">
      <p>Enter Name</p>
      <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} value={name} />
      <p>Enter Description</p>
      <input type="text" placeholder="Description'" id="description" onChange={(e)=> setdescription(e.target.value)} value={description} />
      <br />
      <Button className="button" onClick={onSubmit}>Submit</Button>
    </form>
    
    </div>
    <Post array={array} />
    </div>
    
  );
}

export default App;

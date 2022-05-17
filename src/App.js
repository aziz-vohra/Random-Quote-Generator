import axios from 'axios';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [advice,setAdvice]=useState('');

  const fetchdata =()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
      setAdvice(response.data.slip.advice);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  useEffect(()=>{
    fetchdata();
  },[])
    return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className='button' onClick={fetchdata}><span>Give me Advice</span></button>
      </div>
    </div>
  );
} 

export default App;

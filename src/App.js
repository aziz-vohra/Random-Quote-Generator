
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [advice,setAdvice]=useState('');

  const fetchdata =async()=>{
    const response=await fetch('https://api.adviceslip.com/advice');
    const data=await response.json();
    setAdvice(data.slip.advice);
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

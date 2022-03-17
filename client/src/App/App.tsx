import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Gallery from '../Gallery/Gallery';

function App() {

  const [ data, setData ] = useState({});

  // console.log('STATE FROM APP', data)

  return (
    <div className="App">
      <Header></Header>
      <Form setData={setData}></Form>
      <Gallery data={data} setData={setData}></Gallery>
    </div>
  );
}

export default App;

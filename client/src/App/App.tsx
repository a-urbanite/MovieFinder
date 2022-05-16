import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Gallery from '../Gallery/Gallery';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

function App() {

  const [ data, setData ] = useState({});

  const [ isLoading, setisLoading ] = useState(false);

  // console.log('STATE FROM APP', data)

  useEffect(() => {
    // console.log('RERENDER TRIGGERED')
    setisLoading(false)
    window.scrollTo(0, 0)
  }, [data])

  return (
    <div className="App">
      <Header></Header>
      <Form setData={setData} isLoading={isLoading} setisLoading={setisLoading}></Form>
      <LoadingScreen isLoading={isLoading}/>
      <Gallery data={data} setData={setData} isLoading={isLoading} setisLoading={setisLoading}></Gallery>
    </div>
  );
}

export default App;

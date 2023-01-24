import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';

import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';

import './App.css';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    // App loaded
    console.log('App is loaded');

    // display list on DOM
    displayGalleryList();
  },[])   

  // GET data from /gallery
  const displayGalleryList = () => {
    axios.get('/gallery')
    .then(( response ) => {
      // console.log(response.data);
      setGalleryList(response.data);
    })
    .catch((error) => {
      console.log('error retrieving ',error);
    })
  
  }

  // const galleryList = (galleryList) => {
  //   console.log(galleryList);
  // }

  // DOM
    return (
      <div className="App">
        <Header />
        <GalleryList 
        galleryList={galleryList} />
        
      </div>
    );
}

export default App;

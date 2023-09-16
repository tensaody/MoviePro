
import { useEffect, useState } from 'react';
import './App.css';
import Card, { Cards } from './components/Card';
import { products } from './data/Listing';
import Home from './components/Home';
import { Cardss } from './pages/Homes';
import { Route, Routes } from 'react-router-dom';
import Popular, { Populars } from './pages/Popular';
import Actor, { People } from './pages/Actor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Details } from './pages/Detail';
import About from './pages/About';
import DetailItems, { Detailss } from './pages/DetailItems';
import DetailsActor from './pages/DetailsActor';


function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        
          <Route path='/' element= {<Cardss/>}/>
          <Route path='popular' element= {<Populars/>}/>
          <Route path='actor' element= {<People/>}/>
          <Route path='details' element= {<Details/>}/>
          <Route path='about' element= {<About/>}/>
          <Route path='/detailp/:id' element= {<DetailItems/>}/>
          <Route path='/detailactor/:id' element= {<DetailsActor/>}/>
        
      </Routes>
    <Footer/>
    </>  
  );
}

export default App;

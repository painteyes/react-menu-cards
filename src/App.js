// import logo from './logo.svg';
import React, {Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'

import pizza from './images/pizza.jpg'
import cheescake from './images/cheescake.jpg'
import cutlet from './images/cutlet.jpg'
import ravioli from './images/ravioli.jpg'
import orecchiette from './images/orecchiette.jpg'
import spoonDessert from './images/spoonDessert.jpg'



class App extends Component {

  render() {
    return (

      <>
        <Navbar />
        <div className='container mb-3 mt-5'>
          <h3>What would you like to order ?</h3>
          <hr />
          <div className='row'>
            <Card image={pizza} name= 'Savory pie' price= '6,00' />
            <Card image={cheescake} name= 'Strawberry cheesecake' price= '5,00'/>
            <Card image={cutlet} name= 'Cutlet' price= '6,00'/>
            <Card image={ravioli} name= 'Ravioli with butter and sage' price= '10,00'/>
            <Card image={orecchiette} name= 'Orecchiette with turnip tops' price= '8,00'/>
            <Card image={spoonDessert} name= 'Spoon dessert' price= '5,00'/>
          </div>
          {/* <div className='row'>
            <
  
          </div> */}
        </div>
  
      </>
  
    );
  }
  
}

export default App;

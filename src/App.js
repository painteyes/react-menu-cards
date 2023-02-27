// import logo from './logo.svg';
import React, {Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'

import savoryPie from './images/savory pie.jpg'
import cheescake from './images/cheescake.jpg'
import cutlet from './images/cutlet.jpg'
import ravioli from './images/ravioli.jpg'
import orecchiette from './images/orecchiette.jpg'
import spoonDessert from './images/spoon dessert.jpg'


// Perchè è meglio usare i class component anzichè i functional component se voglio usare le props ?
class App extends Component {
  state = {
    cards: [
      {
        id: 0,
        name: 'Savory pie',
        price: 6.00,
        image: savoryPie
      }, 
      {
        id: 1,
        name: 'Strawberry cheesecake',
        price: 5.00,
        image: cheescake
      },
      {
        id: 2,
        name: 'Cutlet',
        price: 7.00,
        image: cutlet
      },
      {
        id: 3,
        name: 'Ravioli with butter and sage',
        price: 10.00,
        image: ravioli
      },
      {
        id: 4,
        name: 'Orecchiette with turnip tops',
        price: 8.00,
        image: orecchiette
      },
      {
        id: 5,
        name: 'Spoon dessert',
        price: 5.00,
        image: spoonDessert
      }
    ]
  }
  render() {
    return (

      <>
        <Navbar />
        <div className='container mb-3 mt-5'>
          <h3>What would you like to order ?</h3>
          <hr />
          <div className='row'>
            {this.state.cards.map(card => (
              <Card key={card.id} image={card.image} name={card.name} price={card.price}/>
            ))}
          </div>
  
        </div>
  
      </>
  
    );
  }
  
}

export default App;

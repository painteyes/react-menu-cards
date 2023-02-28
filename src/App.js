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
        price: '6,00',
        image: savoryPie
      }, 
      {
        id: 1,
        name: 'Strawberry cheesecake',
        price: '5,50',
        image: cheescake
      },
      {
        id: 2,
        name: 'Cutlet',
        price: '7,00',
        image: cutlet
      },
      {
        id: 3,
        name: 'Ravioli with butter and sage',
        price: '10,00',
        image: ravioli
      },
      {
        id: 4,
        name: 'Orecchiette with turnip tops',
        price: '8,00',
        image: orecchiette
      },
      {
        id: 5,
        name: 'Spoon dessert',
        price: '5,00',
        image: spoonDessert
      }
    ]
  }

  // Gestisce l'eliminazione di una carta dall'elenco di carte memorizzate nello stato.
  // Utilizza this.state.cards per creare una nuova lista di carte che non contiene la carta con l'id specificato.
  // Aggiorna lo stato utilizzando this.setState.
  handleDelete = cardId => {
    const updatedCards = this.state.cards.filter(card => card.id !== cardId)
    this.setState({cards: updatedCards})
  }

  // Gestisce l'eliminazione di una carta dall'elenco di carte memorizzate nello stato.
  // Utilizza la lista filtrata per assegnare direttamente cards nella chiave dell'oggetto di stato.
  // In questo modo, la chiamata a setState è più concisa.
  _handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId)
    this.setState({cards})
  }

  // Gestisce l'eliminazione di una carta dall'elenco di carte memorizzate nello stato.
  // Utilizza la funzione di callback prevState => ({}) di setState per accedere allo stato precedente e filtrare la lista di carte.
  // La nuova lista viene quindi restituita come un oggetto che rappresenta lo stato aggiornato, e viene passata a setState.
  // Questa forma di aggiornamento dello stato è più sicura, in quanto si utilizza il valore precedente dello stato per evitare di avere problemi con la concorrenza delle modifiche dello stato.
  __handleDelete = cardId => {
    this.setState(prevState => ({
      cards: prevState.cards.filter(card => card.id !== cardId)
    }));
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
              <Card key={card.id} card={card} onDelete={this.handleDelete} />
            ))}
          </div>
  
        </div>
  
      </>
  
    );
  }
  
}

export default App;
